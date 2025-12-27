<?php

namespace Alura\Financeiro\Client\Domain\Card;

class CardExpirationDate
{
    private string $month;
    private string $year;

    public function __construct(string|int $month, string|int $year)
    {
        $this->setMonth($month);
        $this->setYear($year);
        $this->validateDate();
    }

    private function setMonth(int|string $month): void
    {
        if ((int) $month <= 0 || (int) $month >= 13) {
            throw new \InvalidArgumentException('Invalid card expiration month');
        }

        $this->month = $month;
    }


    private function setYear(int|string $year): void
    {
        $currentYear = date('Y');
        if ($year < $currentYear) {
            throw new \InvalidArgumentException('Invalid card expiration year');
        }

        $this->year = $year;
    }

    private function validateDate(): void
    {
        $expirationDate = \DateTimeImmutable::createFromFormat('m/Y', "$this->month/$this->year");
        $today = new \DateTimeImmutable();

        if ($expirationDate < $today) {
            throw new \DomainException('Card expired');
        }
    }
}
