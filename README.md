# **Parcel Locker Screen View (PLSV)**

## **Opis działania aplikacji**

Aplikacja symuluje działanie ekranu paczkomatu. Po naciśnięciu przycisku na ekranie powitalnym, odbiorca musi podać numer telefonu i kod odbioru, aby móc odebrać paczkę. Po wprowadzeniu danych w poprawnym formacie i zatwierdzeniu skrytka się otwiera. Po zamknięciu skrytki pojawia się komunikat o odebraniu paczki. Poprzez naciśnięcie jednego z dwóch pzycisków pod komunikatem, klient może zakończyć odbiór lub odebrać kolejną paczkę, gdzie domyślnie będzie wpisany numer telefonu podany wcześniej (można go zmienić). Umieszczenie wszystkich funkcjonalnych elementów aplikacji na białym tle, ma symulować jej działanie na ekranie paczkomatu.

## **Założenia**

Założono, że aplikacja będzie jednostronnicowa, napisana w czystym Javascripcie.
Do pól z numerem telefonu i kodem odbioru można wpisywać tylko liczby.
Po odebraniu paczki, klient może odebrać kolejną paczkę, domyślnie w formularzu będzie wpisany numer telefonu, który wprowadził do odbioru poprzedniej przesyłki.

## **Instrukcja instalacji**

Aplikacja jest zahostowana na platformie Heroku, dostępna pod ponizszym linkiem: [PLSV](https://plsv.herokuapp.com).\
W celu uruchomienia aplikacji lokalnie należy:

1. zainstalować _node.js_,
2. zainstalować _npm_,
3. w terminalu wpisać: `npm install` i zatwierdzić, zostaną zainstalowane odpowiedznie zależności określone w pliku _package.json_,
4. w terminalu wpisać: `npm start`, aplikacja zostanie uruchomiona lokalnie,
5. w przeglądarce otworzyć adres: http://localhost:8080/index.html
