# Warsztat Typescript dla ZDZ

## Ogólne informacje

1. Warsztat ma na celu przybliżyć wzorce projektowe
2. Podstawowym założeniem warsztatu jest znajomość JavaScript
3. Drugim założeniem warsztatu jest, że uczestnik jest zaznajomiony z podstawami programowania obiektowego
   (klasa, instancja, dziedziczenie, polimorfizm).

## Omówione wzorce

1. Singleton
2. Adapter
3. Dependency Injection
4. Obserwator
5. Fabryka

## Wymagania systemowe

- Docker >= 17.5 + Docker Compose
- możliwe wymagane dodatkowe uprawnienia systemowe

## Weryfikacja wymagań

Aby zweryfikować, czy dany komputer / uzytkownik jest w stanie pracować nad warsztatem,
należy uruchomić z linii poleceń skrypt `verification.sh`.
Skrypt jest napisany w Bashu, dlatego należy go uruchomić w powłoce interpretującej poprawnie Bash (np. git-bash, cygwin, docker shell).

## Rozwiązywanie problemów

Najczęstszym problemem jest udostępnianie plików i brak wymaganych do tego uprawnień.
Korzystając z konsoli git-bash należy podczas kazdej sesji uruchomić komendę `export MSYS_NO_PATHCONV=1`.
Dodatkowym problemem może być ustawienie profilu sieci Dockera. Profil mozna zmodyfikować następującym poleceniem, uruchomionym w PowerShell w trybie administratora: `Set-NetConnectionProfile -interfacealias "vEthernet (DockerNAT)" -NetworkCategory Private`. Następnie wystarczy w ustawieniach Dockera udostępnić mu do współdzielenia dysk C, tak jak na obrazku:
![Docker drives sharing](https://msdnshared.blob.core.windows.net/media/2016/06/d4w-shared-drives.png)
