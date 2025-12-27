<?php

namespace Alura\Financeiro\Shared\Infra;

use PhpAmqpLib\Channel\AMQPChannel;
use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

class RabbitMQMessagingQueue implements \Alura\Financeiro\Shared\App\MessagingQueue
{
    private AMQPChannel $channel;

    public function __construct(AMQPStreamConnection $connection)
    {
        $this->channel = $connection->channel();
    }

    public function send(string $message, string $queue): void
    {
        $this->channel->basic_publish(new AMQPMessage($message), $queue);
    }

    public function __destruct()
    {
        $this->channel->close();
    }
}
