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
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/composer --filename=composer
RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN docker-php-ext-install pdo_mysql mbstring

COPY --from=composer /usr/local/composer /usr/bin/composer
COPY ./app/composer.* ./

RUN composer install --no-scripts --no-interaction --optimize-autoloader

COPY ./app ./

CMD symfony server:start --port=80