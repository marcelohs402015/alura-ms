<?php

namespace Alura\Financeiro\Client\Infra;

use Alura\Financeiro\Client\Domain\Client;

class PdoPostgreClientRepository implements \Alura\Financeiro\Client\Domain\ClientRepository
{
    public function __construct(private \PDO $connection)
    {
    }

    public function add(Client $client): void
    {
        $statement = $this->connection->prepare('INSERT INTO clients (name, document) VALUES (?, ?);');
        $statement->bindValue(1, $client->fullName());
        $statement->bindValue(2, $client->documentNumber());
        $statement->execute();
    }
}
