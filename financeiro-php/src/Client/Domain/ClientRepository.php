<?php

namespace Alura\Financeiro\Client\Domain;

interface ClientRepository
{
    public function add(Client $client): void;
}
