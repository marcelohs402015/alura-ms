<?php

namespace Alura\Financeiro\Client\App\EnrollClient;

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
use Alura\Financeiro\Shared\App\Scheduler;

class EnrollClient
{
    public function __construct(
        private Scheduler $taskScheduler
    ) {
    }

    public function __invoke(EnrollClientInputData $data): void
    {
        $this->taskScheduler->schedule('process_payment', $data);
    }
}
