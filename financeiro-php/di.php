<?php

use Alura\Financeiro\Client\Domain\ClientRepository;
use Alura\Financeiro\Client\Infra\PdoPostgreClientRepository;
use Alura\Financeiro\Shared\App\MessagingQueue;
use Alura\Financeiro\Shared\App\Scheduler;
use Alura\Financeiro\Shared\Infra\RabbitMQMessagingQueue;
use Alura\Financeiro\Shared\Infra\SwooleTaskScheduler;
use PhpAmqpLib\Connection\AMQPStreamConnection;
use function DI\{create, factory, get};

$builder = new \DI\ContainerBuilder();
$builder->addDefinitions([
    PDO::class => factory(function () {
        $pdo = new PDO('sqlite::memory:');
        $pdo->exec('CREATE TABLE clients (id INTEGER PRIMARY KEY, name TEXT, document TEXT)');

        return $pdo;
    }),
    AMQPStreamConnection::class => create()->constructor('rabbitmq', 5672, 'guest', 'guest'),
    MessagingQueue::class => get(RabbitMQMessagingQueue::class),
    ClientRepository::class => get(PdoPostgreClientRepository::class),
    Scheduler::class => get(SwooleTaskScheduler::class),
]);

return $builder->build();
