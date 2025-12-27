FROM php:8.0.14

RUN apt-get update && apt-get install -y libzip-dev libsqlite3-dev && docker-php-ext-install zip
RUN docker-php-ext-install sockets

RUN echo 'yes\nno\nno\nno\nno\nno\nno\nno\nno\nyes\n' | pecl install swoole-5.1.3
RUN docker-php-ext-enable swoole

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
