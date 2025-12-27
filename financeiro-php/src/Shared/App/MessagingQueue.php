<?php

namespace Alura\Financeiro\Shared\App;

interface MessagingQueue
{
    public function send(string $message, string $queue): void;
}
