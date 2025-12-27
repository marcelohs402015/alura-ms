<?php

namespace Alura\Financeiro\Shared\Infra;

use Alura\Financeiro\Shared\App\Scheduler;
use Swoole\Http\Server;

class SwooleTaskScheduler implements Scheduler
{
    private Server $server;

    public function __construct()
    {
        global $server;
        $this->server = $server;
    }

    public function schedule(string $taskName, mixed $data): void
    {
        $this->server->task([
            'task_name' => $taskName,
            'data' => $data,
        ]);
    }
}
