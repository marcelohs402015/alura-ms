<?php

namespace Alura\Financeiro\Client\App\ProcessPayment;

use Alura\Financeiro\Client\App\EnrollClient\EnrollClientInputData;
use Alura\Financeiro\Client\Domain\Card\CardExpirationDate;
use Alura\Financeiro\Client\Domain\Card\CardInformation;
use Alura\Financeiro\Client\Domain\Card\CardNumber;
use Alura\Financeiro\Client\Domain\Card\OwnerFullName;
use Alura\Financeiro\Client\Domain\Card\SecurityCode;
use Alura\Financeiro\Client\Domain\Client;
use Alura\Financeiro\Client\Domain\ClientRepository;
use Alura\Financeiro\Client\Domain\Document;
use Alura\Financeiro\Client\Domain\Email;
use Alura\Financeiro\Shared\App\MessagingQueue;

class ProcessPayment
{
    public function __construct(
        private ClientRepository $clientRepository,
        private MessagingQueue $messagingQueue,
    ) {
    }

    public function __invoke(EnrollClientInputData $data)
    {
        $document = new Document($data->clientDocument);
        $cardInfo = new CardInformation(
            new OwnerFullName($data->cardOwnerFullName),
            new CardNumber($data->cardNumber),
            new CardExpirationDate($data->cardExpirationMonth, $data->cardExpirationYear),
            new SecurityCode($data->cardSecurityCode),
        );
        $email = new Email($data->email);
        $client = new Client($document, $cardInfo, $email);

        $this->clientRepository->add($client);

        $this->messagingQueue->send(
            json_encode([
                'cpf' => $client->documentNumber(),
                'name' => $client->fullName(),
                'email' => $client->email(),
            ]),
            'client_enrolled'
        );
    }
}
