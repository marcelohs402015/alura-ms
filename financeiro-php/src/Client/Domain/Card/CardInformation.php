<?php

namespace Alura\Financeiro\Client\Domain\Card;

class CardInformation
{
    public function __construct(
        private OwnerFullName $name,
        private CardNumber $number,
        private CardExpirationDate $expiration,
        private SecurityCode $cvv
    ) {
    }

    public function ownerFullName(): string
    {
        return $this->name;
    }
}
