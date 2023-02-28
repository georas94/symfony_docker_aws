FROM php:8.1-fpm

WORKDIR /app/symfony

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip

RUN mkdir -p /usr/local/bin
RUN apt-get -y install sudo wget
RUN wget --quiet https://get.symfony.com/cli/installer -O - | bash
RUN mv /root/.symfony5/bin/symfony /usr/local/bin/symfony
RUN docker-php-ext-install pdo_mysql mbstring

COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
COPY ./app/composer.* ./

RUN composer install --no-scripts --no-interaction --optimize-autoloader

COPY ./app ./

CMD symfony server:start --port=80