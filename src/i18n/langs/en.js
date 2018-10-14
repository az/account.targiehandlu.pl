export default {

  aor: {
          action: {
              delete: 'Delete',
              show: 'Show',
              list: 'List',
              save: 'Save',
              create: 'Create',
              edit: 'Edit',
              cancel: 'Cancel',
              preview : 'Preview',
              refresh: 'Refresh',
              add_filter: 'Add filter',
              remove_filter: 'Delete filter',
              back: 'Back',
              close: 'Close',
              export: "Export",
          },

          boolean: {
              true: 'Yes',
              false: 'No',
          },

          page: {
              list: '%{name}',
              edit: '%{name} #%{id}',
              show: '%{name} #%{id}',
              create: 'Create %{name}',
              delete: 'Delete %{name} #%{id}',
              dashboard: 'Dashboard',
              not_found: 'Page not found',
              meeting_request: "Send meeting request",
              participant_id: "Participant",
          },

          message: {
              yes: 'Yes',
              no: 'No',
              are_you_sure: 'Are you sure?',
              about: 'About',
              not_found: 'Page not found',
          },

          navigation: {
              no_results: 'Not found',
              page_out_of_boundaries: 'Strona %{page} jest poza limitem',
              page_out_from_end: 'Nie można wyjść poza ostatnią stronę',
              page_out_from_begin: 'Nie można wyjść poza pierwszą stronę',
              page_range_info: '%{offsetBegin}-%{offsetEnd} of %{total}',
              next: 'Next',
              prev: 'Prev',
          },

          notification: {
              updated: 'Updated successfully',
              created: 'Created successfully',
              deleted: 'Removed successfully',
              item_doesnt_exist: 'The element does not exist',
              http_error: 'There was a connection error with the server'
          },

          auth: {
              username: 'Username',
              password: 'Password',
              sign_in: 'Sign In',
              sign_in_error: 'Authorization failed, please try again',
              logout: 'Logout',
          },

          validation: {
              required: 'Required',
              minLength: 'Must be at least %{min} signs',
              maxLength: 'Must be %{max} or less',
              minValue: 'Minimum %{min}',
              maxValue: 'Maksimum %{max}',
              number: 'Must be a number',
              email: 'Must be a valid email address',
              name: 'Name must be more descriptive',

          },
        },


  pos: {
    logout : "Logout",
    ranking: 'Ranking',
    sros: 'test',
    search: 'Search',
    configuration: 'Language',
    language: 'Language',
    theme: {
      name: 'Theme',
      light: 'Light',
      dark: 'Dark'
    },

    support : {

      title : "Technical support",
      description : "Need assistance? Some features are not so self-explanatory? Im ready to help, just let me know I am needed :)",

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

      promote : 'Promote your participation',
      suggest_a_meeting: 'Invite to your booth',
      crucial: "Exhibitor's profile",
      leads: "Your leads",
      settings: "Settings"
    }

  },

  actions : {

    copied : "Copied to clipboard",
    share_linkedin : "Share on Linkedin",
    share_twitter : "Share on Twitter",
    share_facebook : "Share on Facebook"

  },

  auth: {

    errors : {

      badtoken : "Bad token!"

    },
    unauthorized: 'Unauthorized',
    support:'Please contact with sales support if you cannot access this application.',

    checkEmail: 'Check e-mail for further instructions',

    fields: {
      email: 'Your business e-mail address',
      password: 'Password'
    },

    loginByPassword: {
      hint: 'loginByPassword hint'
    },

    loginByRequest: {
      hint: 'loginByRequest hint'
    },

    actions: {
      loginWithPassword: 'Sign In',
      requestAccess: 'Request an access'
    }
  },

  prizes : {

    must_be_winner: "You must be #1",
    name : "Ranking & Rewards",
    position_1: 'Your position must be beetween #',
    position_2: 'Only for position #',
    and: " and #",
    points: " points.",
    place: "Your current position: ",
    unknown: "#unknown",


    "presentation" : {
      "title" : "Presentation slot",
      "description" : "A 15 minute presentation slot at the expo. Your presentation will be added to the official E-Commerce Poland Expo presentations agenda.",
      "image" : ""
    },

    "video_interview" : {
      "title" : "Video Interview",
      "description" : "It will be carried out during the event and then published on the fanpage of the E-commerce Poland Expo and the ehandelmag.com portal.",
      "image" : ""
    },

    "brand_highlight" : {
      "title" : "Logo highlight",
      "description" : "Your logo will be displayed on the official E-commerce Poland Expo website among the leading e-commerce companies.",
      "image" : ""
    },

    earlybird : {

      title : "Access to earl-bird sales",
      description : "Next E-commerce Poland Expo edition will be held in Warsaw (7th of November)."

    },


    "leaflets" : {
      "title" : "Permission of Distribution of flyers",
      "description" : "Distribution of flyer at the venue by a hostess (*) Costs of production, hostess hire and delivery are borne by the sponsor",
      "image" : ""
    },

    "meetups" : {
      "title" : "Mega package of invitations",
      "description" : "You will receive 50 personal invitations to use in your Exhibitor panel.",
      "image" : ""
    },

    "scanner" : {
      "title" : "Badge scanner mobile app",
      "description" : "You will get an access to dedicated visitor badge scanner app. Each booth representative of your company would be able to gather visitor data and export results to .xls or .csv.",
      "image" : ""
    },

    "rollups" : {

        "title" : "Roll-up in the Business Lounge",
        "description" : "Your company will have a unique opportunity to present your logotype near the catering area for exhibitors and visitors.",
        "image" : ""
    },

    "blog" : {
      "title" : "A guest article on the ehandelmag.com portal",
      "description" : "One-time inclusion of company content on the ehandelmag.com portal. The blogpost will be promoted on the Facebook and Twitter channels of the E-Commerce Poland Expo.",
      "image" : ""
    },

  },


  fields: {
    skip: "Skip, don't import",
    fname: 'First name',
    lname: 'Last name',
    cname2: 'Company name',
    email: 'E-mail address',
    phone : 'Phone number',
  },

  invites: {
    pagetitle: 'Send an invite to your contact lists',

    import_manually: 'Paste or enter manually',
    import_csv: 'Upload CSV file',

    errors: {
      no_email_assigned: 'Select email',
      mappings_overlap: 'Check mappings'
    }
  },



  dashboard: {

    tutorial:'Check out our tutorial about using promo materials!',

    // order: {
    //   items:
    //     'by %{customer_name}, one item |||| by %{customer_name}, %{nb_items} items'
    // },
    welcome: {
      title: "Welcome to Exhibitor's Panel!",
      subtitle: ' ',
      description : "This is the administration panel for exhibitors which allows you to promote your presence at the E-commerce Poland Expo.The options provided here will help you to schedule meetings with registered attendees, invite your clients (soon!) and get extra promotional services at the event.",
      aor_button: 'Link',
      demo_button: 'Link #2'
    }
  },

  informer: {

    title: "Logistics information",

    tabs: {
      basic: 'Basic information',
      shipment: 'Shipping of materials',
      assembly: 'Assembly/disassembly',
    },

    basic: {
      exhibition_space: "Exhibition space",
      area: "Area:",
      stand_options: {

        standard: "3m x 2m (Light, Standard, Hot, Super-Hot, Ultra)",
        grand:"6m x 4m (Grand, Ultra-Grand)",

      },

      equipment: "If you have not ordered additional equipment to your booth, there will be:",

      equipment_options: {

        hocker: "2 hockers",
        table: "1 table",
        voucher: "4 lunch vouchers",
        wifi: "WiFi password",
        electricity: "electric socket (300 W)"

      },

      backwall: "The maximum dimensions of the back wall are 3 m wide x 2.5 m high",

      add_equipment: "Additional equipment",

      carpeting: "If you want a carpeting in your stand in any color of your choice - contact us at: ",

      add_eq_contact: "Do you need additional furniture, vouchers, electricity or you want to rent a TV screen? Talk to us!",

      see: "See visualization",
      construction: " prepared by All in Event. You can order it by 6 April at: ",

      representative: "Company representatives",
      reps_info: "The number of participants on your booth is unlimited. Remember to enter their data in ",

    },

    shipment: {

      address: "Shipping address:",
      describe: "E-commerce Poland Expo [booth number, COMPANY NAME]",
      country: ", Poland",

      deliver_hours: "Delivers of the materials will take place in the following hours:",

      date: {

        day_before_event: "April 24 (4:00 PM)",
        event_day: "April 25 (8:00 AM)",

      },

      deliver: "Materials can be delivered to the Expo no earlier than April 23",
      sped: "The official forwarding agent of the Expo is Transmeble International Sp. z o.o.",
      contact_person: "Contact person:",

    },

    assembly: {

      assembly: "Assembly",
      disassembly: "Disassembly",

      options: {

        day_before_event: "April 24 (from 6:00 PM)",
        event_day: "April 25 (8:00 AM - 9:30 AM)"
      },

      event_day: "April 25 (5:15 PM - 8:00 PM)",


     },

  },


  resources: {

    upgrades : {

      name : "Purchase additional services",
      menu : "Add Services",

      booth : {
        fullprint : {
          name : "Full booth arrangement (fullprint)",
          description : "Only for standard booth 3x2m. Chcesz przyjść na gotowe stoisko? Oto opcja dla Twojej firmy.",
          specs : "Specyfikacja plików do druku: a) LADA - 100x100cm, TIFF, 120dpi (skala 1:1) b) ŚCIANKA - 300x250cm, TIFF, 120 dpi (skala 1:1)"
        },
        counter : {
          name : "Lada z nadrukiem, wykładzina",
          description : "Opcja dla firm, które dysponują własnymi elementami brandingowymi - jak na przykład reklamową ścianką tekstylną",
          specs : "Specyfikacja pliku do druku 100x100cm, TIFF, 120dpi (skala 1:1)"
        },
        flooring : {
          name : "Dodatkowe meble, wykładzina",
          description : "Jeśli standardowe umeblowanie (2 wysokie stołki)  wydaje się Tobie niewystarczające - jest możliwość dodania wykładziny oraz 2 dodatkowych stołków barowych "
        },
        osb : {
          name : "Kompleksowa zabudowa OSB",
          description : "DOTYCZY TYLKO STOISK 3x2m. Chcesz przyjść na gotowe stoisko? Oto opcja dla Twojej firmy. "
        }
      },

      misc : {
        leaflets : {
          name : "Prawo do dystrybucji ulotek",
          description : "Jeśli chcesz wynająć hostessy aby prowadziły działania reklamowe poza stoiskiem musisz wykupić zezwolenie organizatora."
        },
        welcomepacks : {
          name : "2 dodatkowe vouchery + 1 karta parkingowa",
          description : "W ramach standardowej oferty stoiska otrzymujesz 4 welcome packi, w których znajdują się 4 vouchery cateringowe oraz 1 karta parkingowa. Jeśli potrzebujesz dodatkowej karty parkingowej i/lub dodatkowych voucherów obiadowych, kup ten pakiet."
        },
        electricity : {
          name : "Niezależne podłączenie prądu 3kW",
          description : "Potrzebujesz więcej niż standardowe 300W? Wykup niezależne podłączenie prądu. "
        },
        display : {
          name : "TV 50 cali + statyw",
          description : "TV z wejściem HDMI i USB. Dostarczany na stoisko."
        }
      },

      actions : {

        details : "Szczegóły i zakup"

      } 

    },


    companydata : {

      name : "Company data",
      menu: "Company data",
      subtitle : "",
      limit : "",



      customfields: {

        about: {
          name : "Company description",
          description : ""
        },
        expo: {
          name : "Special offer for the Expo",
          description : ""
        },
        facebook : {
          name : "Company profile on Facebook",
          description : ""
        },
        keywords: {
          name : "Keywords",
          description : ""
        },
        linkedin: {
          name : "Company profile on LinkedIn",
          description : ""
        },
        logotype: {
          name :  "URL to the logotype (.png, .gif, .jpg)",
          description : ""
        },
        products: {
          name : "Key products / services",
          description : ""
        },
        twitter: {
          name : "Company profile on Twitter",
          description : ""
        },
        website: {
          name : "Company website URL",
          description : ""
        },
        countries: {
          name : "Countries of operation",
          description : ""
        },
        name: {
          name : "Company name",
          description : ""
        },
        opengraph_image : {
          name : "Alt image shared on social websites",
          description : "If not set your logotype is shared"
        },

        event_manager: {
          name : "Logistics person e-mail address",
          description : ""
        },

        lang: {
          name : "Preferred language of communication",
          description : ""
        },

        invitation_template: {
          name : "Visitor invitaion template",
          description : "Fill in to speed up inviting visitors to your booth"
        },

      },

      fields : {



        countries_choices: {
          national: "Poland",
          europe: "Europe",
          global: "World",
          other: "Other",
        },

        name : "Field name",
        value: "Value",
        updated_at: "Updated at",

        keywords_choices : {
          logistics : "Logistics",
          payment: "Payment",
          platform: "E-shop platform",
          sales_generation: "Sales generation",
          software: "Software",
          communication: "Communication",
          customer_support:"Customer support",
          analytics: "Analitycs",
          international_sales: "International sales",
          omnichannel: "Omnichannel",
          infrastructure: "Infrastructure",

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

      menu: "Company representatives",
      name: "Register company representatives",

      fields:{

          profile : {

            fname : "First name",
            lname : "Last name",
            position : "Position",
            phone : "Phone",

          }
      },
    },

    rewards : {

        menu : 'Rewards',
        name : "Rewards",

        body_text_1: "To participate in the ",
        body_text_2: " and be able to win rewards you must use dedicated tracking link. See ",
        body_text_3: " for details.",

    },


    logistics : {

      menu : 'Logistics',
      name : "Logistics",

    },

    ranking : {

      menu : 'Ranking',
      name : "Ranking",
      limit: '',
      subtitle : 'You earn points by showing your participation in event as an exhibitor. Use the promo materials we have prepared for you. Every unique pageview of E-commerce Poland Expo with your tracking link equals 1pt.',

      fields : {
          stats: "Points",
          domain: "Domain",
          slug : "Domain",
          export: "Export",
          profile: {
            name: "Brand name",
          },

      },



    },

    scans: {

      menu : 'Your Scans',
      name: 'Your Scans',
      fields: {
        refresh: "refresh",
        participant: {
          profile: {
              fname: "First name",
              lname: "Last name",
              cname2: "Company name",
              position: "Position"
        },
      },
    },

      status:{
        agreed: "Confirmed",
        rejected: "Rejected",
        scheduled: "Scheduled",
      },

      info : {
        menu : 'Badge Scanner How-to',
        name: 'Badge Scanner How-to',
      },

      noresults : "This feature may not be enabled for you. Sorry.",
      noresultsmore : "",
    },

    creatives: {

      menu : 'Promo materials',
      name: 'Promo materials',
      heading: '  Do you want to join the contest? We recommend using promo materials provided below.',
      subheading: 'Wait... there is more!',
      newsletters: "Newsletters",
      banners: "Banners",
      choose_size: "Choose size",

      langs : {

        pl : "POLSKI",
        en : "ENGLISH",
        undefined : ""
      },


      version: {
        english: "E-mail template - english",
        german: "E-mail template - deutsch",
      },

      fields:{
        image_downloaded: 'Image downloaded',
        image_body: "Important! Please remember that you have to use your tracking link."
      },


      links : {
        disabled : "Oooops! You must fill in some data: ",
        preview : "Image that will be published on social websites",
        logotype : {
          title : "Link promoting your profile - with default image (your logotype)",
          description : "We designed some default graphics that is shared each time your profile link is posted on social websites. ",
        },
        opengraph_image : {
          title : "Custom link with custom graphics",
          description : "Do you want to excel? Upload custom graphics that will be shared when using this link.",
        }
      },


      newsletters : {

        invite : {

            title : "Invite to your booth!",
            description : "Use this ready-to-send newsletter to inform your partners and clients about participating in the Expo. Tracking link already applied.",

        },

      },



      actions: {
          copy_html_to_clipboard : "Copy HTML To the Clipboard",
          copy_to_clipboard : "Copy To Clipboard",
          copy_url_to_clipboard : "Copy URL to the Clipboard",
          download_html: "Download HTML",
          download_zip: "Download .zip",
          download: "Download",
          copy_tracking_link_to_clipboard: "Copy tracking link to clipboard",
          copy_embed_code: "Copy embed code",
          preview: "Preview",
          close: "Close",
          jumpto: "Jump to Profile",
        },
          types: {
            link: {
              title: "Your company universal tracking link",
            },
          },

    },

    newsletters: {

      menu : 'Newsletter templates',
      name: 'Newsletter templates',


      fields: {
        name: 'Internal name of newsletter',
        data: {
          sender_name: 'Sender name'
        },
        sender_email: 'Sender e-mail address',
        template: 'Custom message'
      }
    },

    meetups: {

      menu : 'RSVPs',
      name: 'RSVPs',

      limit: ' %{limit} invite(s) left.',
      subtitle : 'Your start limit is 5 invites. For every 5 pts in the Ranking you earn 1 additional invite, i.e. company with 50 pts should have 10 invites.',

      noresults : "Navigate to Browse participants to invite some people.",
      noresultsmore : "",

      fields: {

        message: 'Message',
        message_create: "Type in your message",
        creative_id: 'Choose your template',
        comment: "Private comment",


        status:{
          agreed: 'Confirmed',
          rejected: 'Rejected',
          scheduled: 'Scheduled'
        },

        data : {

          from_name : "Sender name",
          from_email : "Sender e-mail address"

        },

        participant: {

          name : "Name",

          profile: {
              title: "Check invitation details",
              fname: "First name",
              lname: "Last name",
              cname2: "Company name",
              position: "Position"
          }
        },
      },

      tabs: {
        form: 'Create new meeting request',
        help: 'Need help? '
      }
    },

    campaigns: {

      menu: 'Email campaigns',
      name: 'Email campaigns',

      noresults : "This feature is not yet enabled for your company.",
      noresultsmore : "However...",

      creative: "Create new campaign",

      fields : {
          fname: "First name",
          lname: "Last name",
          cname2: "Company",
          position: "Position",
          name: "Name",
          scheduled_at: "Scheduled at",
          contactlist_ids : "Choose lists you want to send to...",
          creative_id : "Select newsletter template",

          data : {
              from_email : "From (email)",
              from_name : "From (name)",
              subject : "Subjects"
          },
       },
    },

    imports: {

      menu : 'Imported contacts',
      name: 'Imported contacts',

      fields : {

        title: "Import contacts",

        name: "Import's name",
        created_at: "Created at",
        contactlist: "Contactlist name",
        created_by: "Created by",
        hint: "Paste or enter email addresses. One address per line.",
        drop: "Drop files or click here to select files to upload.",
        success: "Success! File loaded!",
        found: "Found data",
        assignment: "Assignment",
        assignment_body: "What is it?",



      },

      tabs: {
        import_manually: 'Import manually',
        import_csv: 'Upload CSV file'
      }

    },


    contacts: {
      menu : 'Imported Contacts',
      name: 'Contacts',
      noresults: 'Results not found',

      fields : {
        comment : "Comment",
        contactlist_ids: "Lists",

        data : {

          fname : "First name",
          lname : "Last name",
          phone : "Phone",
          cname2 : "Company name",
          position : "Job position",
          linkedin : "Linkedin",
          twitter : "Twitter",
          facebook : "Facebook",
          contactlist_ids : "Choose list(s)",
          name: "Import's name",
          sent_at: "Sent at",

        }

      },

      actions : {

        import : "Add/Import Contacts"

      }
    },


    visitors: {

      menu : 'Browse participants',
      name: 'Browse participants',



      tabs: {
        invitation: 'Send invitation',
        subject: 'Subject',
        message: 'Message'
      },

      actions: {
        invite: 'Invite'
      },

      fields: {
        creative: 'Select newsletter',
        profile: {
          fname: "First name",
          lname: "Last name",
          cname2: "Company name",
          position: "Position",
          domain: "Domain"
        },
      }
    },

    'participants-by-code': {
      name: 'Participants'
    },

  }
};
