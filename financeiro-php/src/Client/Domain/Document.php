<?php

namespace Alura\Financeiro\Client\Domain;

class Document implements \Stringable
{
    private string $documentNumber;

    public function __construct(string|int $documentNumber)
    {
        $this->setDocumentNumber($documentNumber);
    }

    private function setDocumentNumber(int|string $documentNumber): void
    {
        if (!preg_match('/^\d{11}$/', $documentNumber)) {
            throw new \InvalidArgumentException('Document in wrong format.');
        }

        $this->documentNumber = $documentNumber;
    }

    public function __toString(): string
    {
        return $this->documentNumber;
    }
}
