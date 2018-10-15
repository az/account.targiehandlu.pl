export default {


  aor: {
          action: {
              delete: 'Usuń',
              show: 'Pokaż',
              list: 'Lista',
              save: 'Zapisz',
              create: 'Utwórz',
              edit: 'Edytuj',
              cancel: 'Anuluj',
              refresh: 'Odśwież',
              preview : 'Podgląd',
              add_filter: 'Dodaj filtr',
              remove_filter: 'Usuń filtr',
              back: 'Powrót',
              close: 'Zamknij',
              export: "Eksportuj"
          },
          boolean: {
              true: 'Tak',
              false: 'Nie',
          },
          page: {
              list: '%{name}',
              edit: '%{name} #%{id}',
              show: '%{name} #%{id}',
              create: 'Utwórz %{name}',
              delete: 'Usuń %{name} #%{id}',
              dashboard: 'Panel główny',
              not_found: 'Strona nie została znaleziona',
              meeting_request: "Wyślij prośbę o spotkanie",
          },
          input: {
              image: {
                  upload_several: 'Upuść pliki tutaj lub naciśnij, aby załadować.',
                  upload_single: 'Upuść plik tutaj lub naciśnij, aby załadować.',
              },
          },
          message: {
              yes: 'Tak',
              no: 'Nie',
              are_you_sure: 'Czy jesteś pewien?',
              about: 'O',
              not_found: 'Strona której szukasz nie istnieje',
          },
          navigation: {
              no_results: 'Nie znaleziono',
              page_out_of_boundaries: 'Strona %{page} jest poza limitem',
              page_out_from_end: 'Nie można wyjść poza ostatnią stronę',
              page_out_from_begin: 'Nie można wyjść poza pierwszą stronę',
              page_range_info: '%{offsetBegin}-%{offsetEnd} z %{total}',
              next: 'Następna',
              prev: 'Poprzednia',
          },
          auth: {
              username: 'Nazwa użytkownika',
              password: 'Hasło',
              sign_in: 'Zaloguj',
              sign_in_error: 'Autoryzacja nie powiodła się, spróbuj ponownie',
              logout: 'Wyloguj',
          },
          notification: {
              updated: 'Zaktualizowano pomyślnie',
              created: 'Utworzono pomyślnie',
              deleted: 'Usunięto pomyślnie',
              item_doesnt_exist: 'Element nie istnieje',
              http_error: 'Wystąpił błąd połączenia z serwerem'
          },
          validation: {
              required: 'Wymagane',
              minLength: 'Minimum %{min} znaków',
              maxLength: 'Maksimum %{max} znaków',
              minValue: 'Minimum %{min}',
              maxValue: 'Maksimum %{max}',
              number: 'Wprowadź liczbę',
              email: 'Wprowadź prawidłowy adres e-mail',
              name: "Nazwa musi być dłuższa",
          },
      },






  pos: {
    logout : "Wyloguj",
    ranking: "Ranking",
    sros: 'test',
    search: 'Szukaj',
    configuration: 'Język',
    language: 'Język',
    theme: {
      name: 'Theme',
      light: 'Light',
      dark: 'Dark'
    },

    sections: {
      suggest_a_meeting: 'Zaproś do stoiska'
    },

    support : {

      title : "Pomoc techniczna",
      description : "Ktoraś z funkcji jest niejasna? Potrzebujesz krótkiego szkolenia? Zapraszam do kontaktu",

    }

  },


  common : {

    sales : {
      starts : "start sprzedaży",
      ends : "koniec sprzedaży",
      net : "+23% VAT",
      gross : "zawiera 23% VAT",
      remaining : "Pozostało",
      pcs : "sztuk",
    
    },
    
    actions : {
      buy : "Kup teraz"
    },

    statuses : {
      unavailable : "Niedostępne",
      already_bought : "Już zakupione",
      success : "Sukces!"
    },

    langs : {

        pl : "polski",
        en : "english",
        de : "deutsch",

    },

  },


  menu : {

    sections : {

      promote : "Promuj swój udział",
      suggest_a_meeting: 'Zaproś do swojego stoiska',
      crucial: "Profil wystawcy",
      leads: "Twoje leady",
      settings: "Ustawienia"
    }

  },




  actions : {

    copied : "Skopiowano do schowka",
    share_linkedin : "Udostępnij na Linkedin",
    share_twitter : "Udostępnij na Twitter",
    share_facebook : "Udostępnij na Facebook"

  },




  auth: {

    errors : {

      badtoken : "Zły token!"

    },
    unauthorized: 'Brak dostepu',
    support: 'Skontaktuj się z nami, jeśli nie masz dostępu do aplikacji.',

    checkEmail: 'Sprawdź swoją skrzynkę pocztową, w celu uzyskania dalszych informacji',

    fields: {
      email: 'Twój służbowy adres e-mail',
      password: 'Hasło'
    },

    loginByPassword: {
      hint: 'loginByPassword podpowiedź'
    },

    loginByRequest: {
      hint: 'loginByRequest podpowiedź'
    },

    actions: {
      loginWithPassword: 'Zaloguj się',
      requestAccess: 'Poproś o dostęp'
    }
  },






  prizes : {

    "name" : "Ranking i nagrody",
    must_be_winner: "Musisz zająć #1 miejsce",
    position_2: 'Wyłacznie dla miejsca #',
    position_1: 'Musisz zająć miejsce pomiędzy #',
    and: " a #",
    points: " punktów.",
    place: "Twoja obecna pozycja: ",
    unknown: "nie odnotowaliśmy aktywności",


    "presentation" : {
      "title" : "Prezentacja",
      "description" : "15-minutowy slot prezentacyjny podczas wydarzenia. Twoja prezentacja zostanie dodana do oficjalnej agendy Targów eHandlu.",
      "image" : ""
    },

    "video_interview" : {
      "title" : "Wywiad wideo z przedstawicielem firmy",
      "description" : "Zostanie on przeprowadzony podczas wydarzenia, a następnie opublikowany na fanpage'u Targów eHandlu oraz portalu ehandelmag.com.",
      "image" : ""
    },

    "brand_highlight" : {
      "title" : "Wyróżnienie logotypu",
      "description" : "Twój logotyp zostanie wyświetlony na oficjalnej stronie Targów eHandlu wśród wiodących firm z branży e-commerce.",
      "image" : ""
    },

    "leaflets" : {
      "title" : "Dystrybucja ulotek na terenie Targów",
      "description" : "Twoja firma będzie miała mozliwość dystrybuowania ulotek na terenie całej hali targowej. (*) Koszty produkcji, dostawy i wynajęcia hostess ponosi wystawca.",
      "image" : ""
    },

    earlybird : {

      title : "Dostęp do najtańszej puli sprzedaży na kolejne Targi",
      description : "Kolejne Targi eHandlu już w listopadzie. Najbardziej zaangażowani Wystawcy dostaną informację apropos otwarcia sprzedaży wcześniej. Niższe ceny, lepszy wybór lokalizacji stoiska."

    },

    "meetups" : {
      "title" : "Mega pakiet zaproszeń",
      "description" : "Otrzymasz 50 personalnych zaproszeń do wykorzystania w swoim Panelu Wystawcy.",
      "image" : ""
    },

    "scanner" : {
      "title" : "Aplikacja do skanowania badgów",
      "description" : "Otrzymasz dostęp do aplikacji umożliwiającej skanowanie identyfikatorów zwiedzających. Każdy z przedstawicieli Twojej firmy będzie mógł zbierać dane o odwiedzających i eksportować wyniki do .xls lub .csv.",
      "image" : ""
    },

    "rollups" : {
      "title" : "Roll-up w strefie Business Lounge",
      "description" : "Twój firmowy roll-up znajdzie się w strefie networkingowej i gastronomicznej dla Wystawców.",
      "image" : ""
    },

    "blog" : {
      "title" : "Gościnny artykuł na branżowym portalu ehandelmag.com",
      "description" : "Możliwość opublikowania autorskiego artykułu na portalu ehandelmag.com. Wpis będzie promowany na oficjalnych kanałach social media Targów eHandlu.",
      "image" : ""
    },

  },



  fields: {
    skip: "Pomiń, nie importuj",
    fname: 'Imię',
    lname: 'Nazwisko',
    cname2: 'Nazwa firmy',
    email: 'Adres e-mail',
    phone : 'Numer telefonu',
  },





  invites: {
    pagetitle: 'Wyślij zaproszenia do swojej listy kontaktów',

    import_manually: 'Wklej lub wprowadź ręcznie',
    import_csv: 'Załaduj plik CSV',

    errors: {
      no_email_assigned: 'Wybierz e-mail',
      mappings_overlap: 'Sprawdź mapowania'
    }
  },



  dashboard: {

    tutorial:'Zobacz nasz tutorial na temat korzystania z materiałów promocyjnych!',

    // order: {
    //   items:
    //     'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items'
    // },
    welcome: {
      title: 'Witaj w Panelu Wystawcy!',
      subtitle: ' ',
      description : "Masz przed sobą panel administracyjny dla wystawców, który umożliwia promowanie Twojej obecności na Targach eHandlu. Dostępne opcje pomogą Ci zaplanować spotkania z zarejestrowanymi uczestnikami, zaprosić swoich klientów (wkrótce!) i zdobyć dodatkowe usługi promocyjne podczas wydarzenia.",
      aor_button: 'Link',
      demo_button: 'Link #2'
    }
  },

  informer: {

    title: "Informacje logistyczne",

    tabs: {
      basic: 'Podstawowe informacje',
      shipment: 'Wysyłka materiałów',
      assembly: 'Montaż/demontaż',
    },

    basic: {
      exhibition_space:"Przestrzeń wystawiennicza",
      area: "Powierzchnia:",
      stand_options: {

        standard: "3m x 2m (Light, Standard, Hot, Super-Hot, Ultra)",
        grand:"6m x 4m (Grand, Ultra-Grand)",

      },

      equipment: "Jeżeli nie dokonałeś zamówienia dodatkowego wyposażenia, na Twoim stoisku znajdować się będą:",

      equipment_options: {

        hocker: "2 hockery",
        table: "1 stół koktajlowy",
        voucher: "4 vouchery na lunch",
        wifi: "hasło do WiFi",
        electricity: "gniazdo elektryczne obsługujące maksimum 300W"

      },

      backwall: "Maksymalne wymiary tylnej ściany to 3m szer. x 2,5m wys.",

      add_equipment: "Usługi dodatkowe",

      carpeting: "Jeśli chcesz, aby na Twoim stoisku znalazła się wykładzina w dowolnie wybranym przez Ciebie kolorze - zgłoś się do nas na: ",

      add_eq_contact: "Potrzebujesz dodatkowych mebli, voucherów, prądu lub chcesz wynająć ekran TV? Odezwij się do nas!",

      see: "Zobacz wizualizację",
      construction: " przygotowaną przez firmę All in Event. Zamówienia możesz dokonać do 6 kwietnia pod adresem: ",

      representative: "Przedstawiciele firmy",
      reps_info: "Liczba przedstawicieli Twojej firmy znajdujących się na stanowisku jest dowolna. Pamiętaj, aby wprowadzić ich dane w zakładce ",

    },

    shipment: {

      address: "Adres do wysyłki:",
      describe: "XV Targi eHandlu, [nr stoiska, NAZWA FIRMY]",
      country: "",
      contact_number: "Numer kontaktowy dla Kuriera: +48 690 960 279",
      fill_in_form: "Przed nadaniem paczki, wypełnij ",
      form: "FORMULARZ",
      deliver_hours: "Dostawy materiałów na halę, odbędą się w godzinach:",

      date: {

        day_before_event: "24 kwietnia (16:00)",
        event_day: "25 kwietnia (8:00)",

      },

      deliver: "Doręczenie materiałów przez Kuriera na teren EXPO może odbyć się nie wcześniej niż 23 kwietnia",
      sped: "Oficjalnym Spedytorem Targów jest firma Transmeble International Sp. z o.o.",

    },

    assembly: {

      assembly: "Montaż",
      disassembly: "Demontaż",

      delivery: 'W dniu montażowym wszystkie bramy wjazdowe będą otwarte. Dostawcy będą mogli korzystać z wejścia oznaczonego numerem "D3". Zobacz mapkę poniżej:',
      go_to_info: "Po przyjściu na halę, udaj się bezpośrednio do punktu INFO - tam dowiesz się co zrobić dalej",
      tape: "Pamiętaj, aby podczas montażu używać materiałów nie pozostawiających śladów na podłodze hali. Szczególną uwagę należy zwrócić na taśmę do podklejania wykładziny. Polecamy ETG Imawex.",



      options: {

        day_before_event: "6 listopada  (16:00 - 20:00)",
        event_day: "7 listopada (8:00 - 9:30)"
      },

      event_day: "7 listopada (17:15 - 20:00)",


     },

  },



  resources: {

    upgrades : {

      name : "Zakup usługi dodatkowe",
      menu : "Usługi dodatkowe",

      booth : {
        fullprint : {
          name : "Kompleksowa zabudowa FULLPRINT",
          description : "DOTYCZY TYLKO STOISK 3x2m (stoiska standardowe). Chcesz przyjść na gotowe stoisko? Oto opcja dla Twojej firmy. Tylna ścianka z pełnoformatowym nadrukiem, lada z nadrukiem, wykładzina, dodatkowe umeblowanie.",
          specs : "Musimy otrzymać od Ciebie pliki do wydruków na adres booths@targiehandlu.pl. Specyfikacja plików: a) LADA - 100x100cm, TIFF, 120dpi (skala 1:1) b) ŚCIANKA - 300x250cm, TIFF, 120 dpi (skala 1:1)"
        },
        counter : {
          name : "Lada z nadrukiem + wykładzina",
          description : "Opcja dla firm, które dysponują własnymi elementami brandingowymi -  na przykład reklamową ścianką tekstylną wielorazowego użytku.",
          specs : "Musimy otrzymać od Ciebie pliki do wydruków na adres booths@targiehandlu.pl. Specyfikacja pliku do druku: projekt 100x100cm, TIFF, 120dpi (skala 1:1)"
        },
        flooring : {
          name : "Dodatkowe meble + wykładzina",
          description : "Jeśli standardowa konfiguracja stoiska jest niewystarczająca, istnieje możliwość dodania wykładziny oraz 2 dodatkowych stołków barowych ",
          specs : ""
        },
        osb : {
          name : "Kompleksowa zabudowa OSB",
          description : "DOTYCZY TYLKO STOISK 3x2m (stoiska standardowe). Chcesz przyjść na gotowe stoisko? Oto opcja dla Twojej firmy. Tylna ścianka z płyty OSB z minimalistycznym nadrukiem, lada z nadrukiem, wykładzina, dodatkowe umeblowanie. ",
          specs : "Musimy otrzymać od Ciebie pliki do wydruków na adres booths@targiehandlu.pl. Specyfikacja plików do druku: logotyp w formacie wektorowym (ai, pdf, eps)."
        }
      },

      misc : {
        leaflets : {
          name : "Prawo do dystrybucji ulotek",
          description : "Jeśli chcesz wynająć hostessy aby prowadziły działania reklamowe poza stoiskiem musisz wykupić zezwolenie organizatora na taką formę reklamy.",
          specs : ""
        },
        welcomepacks : {
          name : "2 dodatkowe vouchery + 1 karta parkingowa",
          description : "W ramach standardowej oferty stoiska otrzymujesz 4 welcome packi, w których znajdują się 4 vouchery cateringowe oraz 1 karta parkingowa. Jeśli potrzebujesz dodatkowej karty parkingowej i/lub dodatkowych voucherów obiadowych, kup ten pakiet.",
          specs : ""
        },
        electricity : {
          name : "Niezależne podłączenie prądu 3kW",
          description : "Standardowe przyłącze prądu pozwala na podłączenie kilku laptopów i ew. ekranu LCD. Potrzebujesz więcej niż standardowe 300W? Wykup niezależne podłączenie prądu o mocy 3000W.",
          specs : ""
        },
        display : {
          name : "Ekran LCD 50 cali",
          description : "Ekran pozwala na podłączenie źródła HDMI bądź USB. Dostarczany na stoisko.",
          specs : ""
        }
      },

      actions : {

        details : "Szczegóły i zakup"

      } 

    },

    companydata:{

      name : "Dane firmy",
      menu: "Dane firmy",
      subtitle : "",
      limit : "",

      customfields: {

        about: {
          name : "Opis firmy",
          description : ""
        },
        expo: {
          name : "Oferta specjalna na Targi",
          description : ""
        },
        facebook : {
          name : "Profil firmy na Facebook",
          description : ""
        },
        keywords: {
          name : "Słowa kluczowe",
          description : ""
        },
        linkedin: {
          name : "Profil firmy na LinkedIn",
          description : ""
        },
        logotype: {
          name :  "Adres URL do logotypu (.png, .gif, .jpg)",
          description : ""
        },
        products: {
          name : "Kluczowe produkty / usług",
          description : ""
        },
        twitter: {
          name : "Profil firmy na Twitter",
          description : ""
        },
        website: {
          name : "Adres URL strony firmowej",
          description : ""
        },
        countries: {
          name : "Zasięg działalności",
          description : ""
        },
        name: {
          name : "Nazwa firmy",
          description : ""
        },
        opengraph_image : {
          name : "Obrazek udostępniany na serwisach społecznościowych",
          description : "Jeśli nie zostanie ustawiony użyjemy Twojego logotypu"
        },

        event_manager: {
          name : "E-mail osoby koordynującej tematy logistyczne",
          description : ""
        },

        lang: {
          name : "Język komunikacji z organizatorem",
          description : ""
        },

        invitation_template: {
          name : "Szablon wiadomości Zaproszenie",
          description : "aby zapraszać szybciej przygotuj wstępną treść wiadomośc... "
        },
      },

      fields: {


        countries_choices: {
          national: "Polska",
          europe: "Europa",
          global: "Świat",
          other: "Inne",
        },

        name: "Co edytujesz?",
        value: "Aktualna wartość",
        updated_at: "Edytowano",

        keywords_choices : {
            logistics : "Logistyka",
            payment: "Płatności",
            platform: "Platforma dla e-sklepów",
            sales_generation: "Generowanie sprzedaży",
            software: "Dostawca oprogramowania",
            communication: "Komunikacja",
            customer_support:"Obsługa klienta",
            analytics: "Analiza danych",
            international_sales: "Sprzedaż międzynarodowa",
            omnichannel: "Omnichannel",
            infrastructure: "Rozwiązania infrastrukturalne",
          },

          lang_choices : {
            en : "english",
            pl : "polski",
            de : "deutsch",
          }

      },

      actions : {
        preview  : "Podgląd profilu"
      },
    },

    representatives:{

      menu: "Przedstawiciele firmy",
      name: "Zarejestruj przedstawicieli firmy",

      fields:{

          profile : {

            fname : "Imię",
            lname : "Nazwisko",
            position : "Stanowisko",
            phone : "Telefon",

          }

      },
    },

    rewards : {

        menu : 'Nagrody',
        name : "Nagrody",

        body_text_1: "Aby zdobywać punkty w ",
        body_text_2: "u i wygrywać nagrody, musisz użyć swojego unikatowego linku URL. Zobacz ",
        body_text_3: ", aby zapoznać się ze szczegółami!",

    },



    logistics : {

      menu : 'Logistyka',
      name : "Logistyka",

    },

    ranking : {

      menu : 'Ranking',
      name : "Ranking",
      limit: '',
      subtitle : 'Promuj swój udział w Targach eHandlu i zdobywaj dodatkowe świadczenia. Użyj materiałów promocyjnych, które dla Ciebie przygotowaliśmy. Każda wizyta na Twoim profilu na stronie Targów eHandlu poprzez Twój unikatowy link to 1 pkt w Rankingu.',

      fields : {
        stats : "Punkty",
        domain: "Domena",
        slug: "Domena",
        profile : {
          name : "Nazwa handlowa"
        }

      },

      list: {
        brand_name: "Nazwa handlowa",
        domain: "Domena",
        points: "Punkty",

      },

    },

    scans: {

      menu : 'Twoje skany',
      name: 'Twoje skany',
      fields: {
        participant:{
          profile: {
              fname: "Imię",
              lname: "Nazwisko",
              cname2: "Nazwa firmy",
              position: "Pozycja w firmie"
          }
        },

      },

      status:{
        agreed: 'Potwierdzony',
        rejected: 'Odrzucony',
        scheduled: 'Umówiony'
      },

      info : {
        menu : 'Pobierz skaner kodów QR',
        name: 'Pobierz skaner kodów QR',
      },

      noresults : "Ta funkcja nie jest jeszcze dostępna dla Twojej firmy.",
      noresultsmore : "",
    },

    creatives: {

      menu : 'Materiały promocyjne',
      name: 'Materiały promocyjne',
      heading: "Chcesz dołączyć do konkursu? Wykorzystaj materiały promocyjne zamieszczone poniżej.",
      subheading : "Poczekaj... to nie wszystko!",
      newsletters: "Newslettery",
      banners: "Banery",
      choose_size: "Wybierz rozmiar",

      langs : {

        pl : "POLSKI",
        en : "ENGLISH",
        undefined : ""

      },

      version: {
          english: "Szablon newslettera - angielski",
          german: "Szablon newslettera - niemiecki",
        },

      fields:{
        image_downloaded: "Obraz został pobrany",
        image_body: "Uwaga! Pamiętaj, że aby zdobywać punkty w Rankingu, musisz użyć swojego unikatowego linku URL."
      },

      links : {
        disabled : "Musisz coś zrobić! Ustaw następujące pola w Dane firmy: ",
        preview : "Oto obrazek, który będzie widoczny w serwisie społecznościowym po opublikowaniu",
        logotype : {
          title : "Obrazek z logotypem Twojej firmy",
          description : "Po opublikowaniu na serwisie społecznościowym będzie widoczna grafika zapraszająca na Targi z Twoim logotypem",
        },
        opengraph_image : {
          title : "Twoja własna grafika",
          description : "Po opublikowaniu na serwisie społecznościowym będzie widoczna Twoja własne grafika. Wymagane dodanie kreacji w Dane firmy.",
        }
      },

      newsletters : {

        invite : {

            title : "Zaproszenie do stoiska",
            description : "Użyj tego szablonu by poinformować swoich Partnerów i Klientów o tym, że uczestniczysz w Targach. Szablon ma dodany Twój unikatowy link zliczający punkty.",

        },

      },


      actions : {
          copy_html_to_clipboard : "Kopiuj HTML do schowka",
          copy_to_clipboard : "Kopiuj do schowka",
          copy_url_to_clipboard : "Kopiuj URL do schowka",
          download_html: "Pobierz HTML",
          download_zip: "Pobierz .zip",
          download: "Pobierz",
          copy_tracking_link_to_clipboard: "Kopiuj link URL",
          copy_embed_code: "Kopiuj kod źródłowy",
          preview: "Podgląd",
          jumpto: "Pokaż profil",

        },

        // types: {
        //   link: {
        //     title: "Każda wizyta na Twoim profilu poprzez poniższy link to 1 punkt w Rankingu. Użyj go przy udostępnianiu materiałów promocyjnych!",
        //   },
        // },
      },

    newsletters: {

      menu : 'Szablony newslettera',
      name: 'Szablony newslettera',


      fields: {
        name: 'Nazwa newslettera',
        data: {
          sender_name: 'Nadawca'
        },
        sender_email: 'Adres e-mail nadawcy',
        template: 'Treść wiadomości'
      }
    },

    meetups: {

      menu : 'RSVPs',
      name: 'RSVPs',

      limit: ' Pozostało %{limit} zaproszeń',
      subtitle : 'Twój początkowy limit wynosi 5 zaproszeń. Za każde 5 pkt w Rankingu otrzymasz 1 dodatkowe zaproszenie, tzn. firma, która zdobyła 50 pkt powinna mieć 10 zaproszeń.',

      noresults : 'Przejdź do zakładki "Przeglądaj uczestników", aby zaprosić wybrane osoby.',
      noresultsmore : "",

      fields: {

        message: 'Wiadomość',
        message_create: "Wpisz swoją wiadomość",
        creative_id: 'Wybierz swój szablon',
        comment: "Komentarz",
        participant_id: "Uczestnik",


        status:{
          agreed: 'Potwierdzony',
          rejected: 'Odrzucony',
          scheduled: 'Umówiony'
        },

        data : {

          from_name : "Nadawca",
          from_email : "Adres e-mail nadawcy"

        },

        participant: {

          name : "Imię i nazwisko",
          profile: {
              title: "Sprawdź szczegóły zaproszenia",
              fname: "Imię",
              lname: "Nazwisko",
              cname2: "Nazwa firmy",
              position: "Pozycja w firmie"
          }
        },
      },

      tabs: {
        form: 'Stwórz nową prośbę o spotkanie',
        help: 'Potrzebujesz pomocy?'
      }
    },

    campaigns: {

      menu: 'Kampania e-mail',
      name: 'Kampania e-mail',

      creative: "Utwórz nową kampanię",


      noresults : "Ta funkcja nie jest jeszcze dostępna dla Twojej firmy.",
      noresultsmore : "Jednak...",

      fields : {
          fname: "Imię",
          lname: "Nazwisko",
          cname2: "Nazwa firmy",
          position: "Pozycja",
          name: "Nazwa",
          scheduled_at: "Zaplanuj na",
          contactlist_ids : "Wybierz listy, do których chcesz wysłać...",

          creative_id : "Wybierz szablon newslettera",

          data : {
              from_email : "Od (e-mail)",
              from_name : "Od (imię)",
              subject : "Temat"
          },
      },

    },

    imports: {

      menu : 'Zaimportowane kontakty',
      name: 'Zaimportowane kontakty',

      fields : {
        title: "Importuj kontakty",
        name: "Nazwa importu",
        created_at: "Utworzono",
        contactlist: "Nazwa listy kontaktowej",
        created_by: "Utworzono przez",
        hint: "Wklej lub wprowadź adresy e-mail ręcznie. Każdy adres powinien zaczynać się od nowej linii.",
        drop: "Upuść pliki lub kliknij tutaj, aby wybrać pliki do przesłania.",
        success: "Udało się! Plik został załadowany pomyślnie!",
        found: "Znalezione dane",
        assignment: "Przypisz do",
        assignment_body: "Co to jest?",


      },

      tabs: {
        import_manually: 'Importuj ręcznie',
        import_csv: 'Załaduj plik CSV'
      }

    },


    contacts: {
      menu : 'Kontakty',
      name: 'Kontakty',
      noresults: 'Nie znaleziono wyników',

      fields : {
        comment : "Komentuj",
        contactlist_ids: "Listy",

        data : {

          fname : "Imię",
          lname : "Nazwisko",
          phone : "Numer telefonu",
          cname2 : "Nazwa firmy",
          position : "Pozycja w firmie",
          linkedin : "Linkedin",
          twitter : "Twitter",
          facebook : "Facebook",
          contactlist_ids : "Wybierz listę/listy",
          name: "Nazwa importu",
          sent_at: "Wysłano na",



        }

      },

      actions : {

        import : "Dodaj/importuj kontakty"

      }
    },


    visitors: {

      menu : 'Przeglądaj uczestników',
      name: 'Przeglądaj uczestników',

      tabs: {
        invitation: 'Wyślij zaproszenie',
        subject: 'Temat',
        message: 'Wiadomość'
      },

      actions: {
        invite: 'Zaproś'
      },

      fields: {
        creative: 'Wybierz newsletter',
        profile: {
          fname: "Imię",
          lname: "Nazwisko",
          cname2: "Nazwa firmy",
          position: "Pozycja",
          domain: "Domena"
        },
      }
    },

    'participants-by-code': {
      name: 'Uczestnicy'
    },

  }


};
