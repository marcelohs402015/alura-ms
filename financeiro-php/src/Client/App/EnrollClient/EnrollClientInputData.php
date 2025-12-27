<?php

namespace Alura\Financeiro\Client\App\EnrollClient;

class EnrollClientInputData
{
    public function __construct(
        public string $clientDocument,
        public string $cardOwnerFullName,
        public string $cardNumber,
        public string $cardExpirationMonth,
        public string $cardExpirationYear,
        public string $cardSecurityCode,
        public string $email,
    ) {
    }

    public static function fromArray(array $data): self
    {
        return new self(
            $data['clientDocument'],
            $data['cardOwnerFullName'],
            $data['cardNumber'],
            $data['cardExpirationMonth'],
            $data['cardExpirationYear'],
            $data['cardSecurityCode'],
            $data['email'],
        );
    }
}
