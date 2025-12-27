<?php

namespace Alura\Financeiro\Client\Domain\Card;

class CardNumber implements \Stringable
{
    private string $number;

    public function __construct(string $number)
    {
        $this->setNumber($number);
    }

    private function setNumber(string $number): void
    {
        if (!preg_match('/^\d{14,16}$/', $number)) {
            throw new \InvalidArgumentException('Invalid card number format');
        }

        $this->number = $number;
    }

    public function __toString(): string
    {
        return $this->number;
    }
}
