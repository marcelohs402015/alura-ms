<?php

namespace Alura\Financeiro\Client\Domain\Card;

class OwnerFullName implements \Stringable
{
    private string $fullName;

    public function __construct(string $fullName)
    {
        $this->setFullName($fullName);
    }

    private function setFullName(string $fullName): void
    {
        $fullName = trim($fullName);

        if (!str_contains($fullName, ' ')) {
            throw new \DomainException('Full name required');
        }

        if (strlen($fullName) < 5) {
            throw new \DomainException('Name too short');
        }

        $this->fullName = $fullName;
    }

    public function __toString(): string
    {
        return $this->fullName;
    }
}
