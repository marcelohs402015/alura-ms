<?php

namespace Alura\Financeiro\Client\Domain\Card;

class SecurityCode implements \Stringable
{
    private string $cvv;

    public function __construct(string|int $cvv)
    {
        $this->setCvv($cvv);
    }

    private function setCvv(int|string $cvv): void
    {
        if (!preg_match('/^\d{3,4}$/', $cvv)) {
            throw new \InvalidArgumentException('Invalid card expiration month');
        }

        $this->cvv = $cvv;
    }

    public function __toString(): string
    {
        return $this->cvv;
    }
}
