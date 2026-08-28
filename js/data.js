const skills = [
    {
        "id": 1,
        "name": "JavaScript",
        "logo": "assets/logos/js_logo.png",
        "desc": "Lerne JavaScript von den Grundlagen bis zur Strukturierung moderner Anwendungen.",
        "phases": [
            {
                "id": 1,
                "title": "Phase 1",
                "shortDesc": "Daten verstehen",
                "longDesc": "Du lernst die grundlegenden Bausteine von JavaScript kennen und verarbeitest erste Daten.",
                "themes": [
                    {
                        "id": 1,
                        "title": "Variablen",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Variablen.",
                        "contents": [
                            {
                                "title": "Variablen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Variablen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Variablen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Variablen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Datentypen",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Datentypen.",
                        "contents": [
                            {
                                "title": "Datentypen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Datentypen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Datentypen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Datentypen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Operatoren",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Operatoren.",
                        "contents": [
                            {
                                "title": "Operatoren verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Operatoren kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Operatoren üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Operatoren selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Bedingungen",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Bedingungen.",
                        "contents": [
                            {
                                "title": "Bedingungen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Bedingungen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Bedingungen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Bedingungen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Schleifen",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Schleifen.",
                        "contents": [
                            {
                                "title": "Schleifen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Schleifen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Schleifen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Schleifen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Funktionen",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Funktionen.",
                        "contents": [
                            {
                                "title": "Funktionen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Funktionen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Funktionen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Funktionen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "title": "Arrays",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Arrays.",
                        "contents": [
                            {
                                "title": "Arrays verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Arrays kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Arrays üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Arrays selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "title": "Arrays mit Objekten",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Arrays mit Objekten.",
                        "contents": [
                            {
                                "title": "Arrays mit Objekten verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Arrays mit Objekten kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Arrays mit Objekten üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Arrays mit Objekten selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "title": "Array-Methoden",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Array-Methoden.",
                        "contents": [
                            {
                                "title": "Array-Methoden verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Array-Methoden kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Array-Methoden üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Array-Methoden selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 10,
                        "title": "Objekte",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Objekte.",
                        "contents": [
                            {
                                "title": "Objekte verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Objekte kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Objekte üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Objekte selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Kleiner Bewerbungsdaten-Tracker",
                        "completed": true
                    }
                ]
            },
            {
                "id": 2,
                "title": "Phase 2",
                "shortDesc": "Moderner Code",
                "longDesc": "Du schreibst übersichtlichen Code mit modernen Sprachmitteln und wiederverwendbaren Funktionen.",
                "themes": [
                    {
                        "id": 1,
                        "title": "Moderner JavaScript-Code",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Moderner JavaScript-Code.",
                        "contents": [
                            {
                                "title": "Moderner JavaScript-Code verstehen",
                                "content": "In diesem Thema lernst du moderne Sprachmittel und saubere Muster in JavaScript kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Moderner JavaScript-Code üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du moderne JavaScript-Muster selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "DOM & Events – kurze Vertiefung",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema DOM und Events.",
                        "contents": [
                            {
                                "title": "DOM & Events – kurze Vertiefung verstehen",
                                "content": "In diesem Thema vertiefst du den Umgang mit dem DOM und Ereignissen und wendest ihn in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "DOM & Events – kurze Vertiefung üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du DOM-Elemente auswählst und auf Events reagierst."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Typische UI-Manipulationen",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema typische UI-Manipulationen.",
                        "contents": [
                            {
                                "title": "Typische UI-Manipulationen verstehen",
                                "content": "In diesem Thema lernst du typische Änderungen an Benutzeroberflächen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Typische UI-Manipulationen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du Inhalte, Klassen und Attribute einer Oberfläche manipulierst."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "DOM + Daten",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema DOM und Daten.",
                        "contents": [
                            {
                                "title": "DOM + Daten verstehen",
                                "content": "In diesem Thema lernst du, Daten in einer Benutzeroberfläche darzustellen und dynamisch zu aktualisieren."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "DOM + Daten üben",
                                "content": "Erstelle ein kleines Beispiel, das Daten verarbeitet und daraus DOM-Inhalte erzeugt."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Persistenz mit `localStorage`",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Persistenz mit localStorage.",
                        "contents": [
                            {
                                "title": "Persistenz mit localStorage verstehen",
                                "content": "In diesem Thema lernst du, Daten mit localStorage im Browser zu speichern und wieder auszulesen."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Persistenz mit localStorage üben",
                                "content": "Erstelle ein kleines Beispiel, das Benutzerdaten mit localStorage speichert und beim Laden wiederherstellt."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Persönlicher Aufgaben-Counter",
                        "completed": false
                    },
                    {
                        "id": 2,
                        "title": "Text- und Zahlenwerkzeuge",
                        "completed": false
                    }
                ]
            },
            {
                "id": 3,
                "title": "Phase 3",
                "shortDesc": "Daten austauschen",
                "longDesc": "Du kommunizierst mit APIs und verarbeitest asynchrone Daten zuverlässig.",
                "themes": [
                    {
                        "id": 1,
                        "title": "JSON verstehen",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema JSON verstehen.",
                        "contents": [
                            {
                                "title": "JSON verstehen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von JSON verstehen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "JSON verstehen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von JSON verstehen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "HTTP und REST",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema HTTP und REST.",
                        "contents": [
                            {
                                "title": "HTTP und REST verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von HTTP und REST kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "HTTP und REST üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von HTTP und REST selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Fetch API",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Fetch API.",
                        "contents": [
                            {
                                "title": "Fetch API verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Fetch API kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Fetch API üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Fetch API selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Promises",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Promises.",
                        "contents": [
                            {
                                "title": "Promises verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Promises kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Promises üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Promises selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Async und Await",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Async und Await.",
                        "contents": [
                            {
                                "title": "Async und Await verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Async und Await kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Async und Await üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Async und Await selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Fehlerbehandlung",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Fehlerbehandlung.",
                        "contents": [
                            {
                                "title": "Fehlerbehandlung verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Fehlerbehandlung kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Fehlerbehandlung üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Fehlerbehandlung selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Wetterdaten-Dashboard",
                        "completed": false
                    }
                ]
            },
            {
                "id": 4,
                "title": "Phase 4",
                "shortDesc": "Strukturieren",
                "longDesc": "Du organisierst größere JavaScript-Anwendungen in klare, wartbare Bestandteile.",
                "themes": [
                    {
                        "id": 1,
                        "title": "ES-Module",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema ES-Module.",
                        "contents": [
                            {
                                "title": "ES-Module verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von ES-Module kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "ES-Module üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von ES-Module selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Klassen",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Klassen.",
                        "contents": [
                            {
                                "title": "Klassen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Klassen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Klassen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Klassen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "NPM und Abhängigkeiten",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema NPM und Abhängigkeiten.",
                        "contents": [
                            {
                                "title": "NPM und Abhängigkeiten verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von NPM und Abhängigkeiten kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "NPM und Abhängigkeiten üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von NPM und Abhängigkeiten selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Testbare Funktionen",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Testbare Funktionen.",
                        "contents": [
                            {
                                "title": "Testbare Funktionen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Testbare Funktionen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Testbare Funktionen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Testbare Funktionen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Projektarchitektur",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Projektarchitektur.",
                        "contents": [
                            {
                                "title": "Projektarchitektur verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Projektarchitektur kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Projektarchitektur üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Projektarchitektur selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Modulare Skill-Verwaltung",
                        "completed": false
                    },
                    {
                        "id": 2,
                        "title": "Kleines JavaScript-Quiz",
                        "completed": false
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "C#",
        "logo": "assets/logos/csharp_logo.png",
        "desc": "Baue professionelle .NET-Anwendungen mit C#, APIs, Datenbanken und moderner Backend-Architektur.",
        "phases": [
            {
                "id": 1,
                "title": "Phase 1",
                "shortDesc": "C# Auffrischung",
                "longDesc": "Festige die Sprachgrundlagen von C# und schreibe typsicheren, gut lesbaren Code.",
                "themes": [
                    {
                        "id": 1,
                        "title": "Syntax und Datentypen",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Syntax und Datentypen.",
                        "contents": [
                            {
                                "title": "Syntax und Datentypen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Syntax und Datentypen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Syntax und Datentypen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Syntax und Datentypen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Kontrollstrukturen",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Kontrollstrukturen.",
                        "contents": [
                            {
                                "title": "Kontrollstrukturen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Kontrollstrukturen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Kontrollstrukturen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Kontrollstrukturen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Methoden und Parameter",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Methoden und Parameter.",
                        "contents": [
                            {
                                "title": "Methoden und Parameter verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Methoden und Parameter kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Methoden und Parameter üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Methoden und Parameter selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Klassen und Objekte",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Klassen und Objekte.",
                        "contents": [
                            {
                                "title": "Klassen und Objekte verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Klassen und Objekte kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Klassen und Objekte üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Klassen und Objekte selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Interfaces und Generics",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Interfaces und Generics.",
                        "contents": [
                            {
                                "title": "Interfaces und Generics verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Interfaces und Generics kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Interfaces und Generics üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Interfaces und Generics selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "LINQ-Grundlagen",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema LINQ-Grundlagen.",
                        "contents": [
                            {
                                "title": "LINQ-Grundlagen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von LINQ-Grundlagen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "LINQ-Grundlagen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von LINQ-Grundlagen selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Konsolenbasierter Finanzplaner",
                        "completed": false
                    }
                ]
            },
            {
                "id": 2,
                "title": "Phase 2",
                "shortDesc": ".NET-Grundlagen und ASP.NET Core",
                "longDesc": "Verstehe das .NET-Ökosystem und den Aufbau einer ASP.NET-Core-Anwendung.",
                "themes": [
                    {
                        "id": 1,
                        "title": ".NET CLI und Projektstruktur",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema .NET CLI und Projektstruktur.",
                        "contents": [
                            {
                                "title": ".NET CLI und Projektstruktur verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von .NET CLI und Projektstruktur kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": ".NET CLI und Projektstruktur üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von .NET CLI und Projektstruktur selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Dependency Injection",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Dependency Injection.",
                        "contents": [
                            {
                                "title": "Dependency Injection verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Dependency Injection kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Dependency Injection üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Dependency Injection selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Middleware",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Middleware.",
                        "contents": [
                            {
                                "title": "Middleware verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Middleware kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Middleware üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Middleware selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Configuration und Options",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Configuration und Options.",
                        "contents": [
                            {
                                "title": "Configuration und Options verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Configuration und Options kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Configuration und Options üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Configuration und Options selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Logging",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Logging.",
                        "contents": [
                            {
                                "title": "Logging verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Logging kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Logging üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Logging selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Erste ASP.NET-Core-Webseite",
                        "completed": false
                    }
                ]
            },
            {
                "id": 3,
                "title": "Phase 3",
                "shortDesc": "REST APIs",
                "longDesc": "Entwickle klare HTTP-Schnittstellen mit Controllern und passenden Statuscodes.",
                "themes": [
                    {
                        "id": 1,
                        "title": "HTTP-Methoden",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema HTTP-Methoden.",
                        "contents": [
                            {
                                "title": "HTTP-Methoden verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von HTTP-Methoden kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "HTTP-Methoden üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von HTTP-Methoden selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Controller und Routing",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Controller und Routing.",
                        "contents": [
                            {
                                "title": "Controller und Routing verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Controller und Routing kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Controller und Routing üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Controller und Routing selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Statuscodes",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Statuscodes.",
                        "contents": [
                            {
                                "title": "Statuscodes verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Statuscodes kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Statuscodes üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Statuscodes selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Request- und Response-Modelle",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Request- und Response-Modelle.",
                        "contents": [
                            {
                                "title": "Request- und Response-Modelle verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Request- und Response-Modelle kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Request- und Response-Modelle üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Request- und Response-Modelle selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "OpenAPI und Swagger",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema OpenAPI und Swagger.",
                        "contents": [
                            {
                                "title": "OpenAPI und Swagger verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von OpenAPI und Swagger kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "OpenAPI und Swagger üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von OpenAPI und Swagger selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Produktkatalog-API",
                        "completed": false
                    },
                    {
                        "id": 2,
                        "title": "Notizen-API",
                        "completed": false
                    }
                ]
            },
            {
                "id": 4,
                "title": "Phase 4",
                "shortDesc": "SQL und relationale Datenbanken",
                "longDesc": "Modelliere Daten und formuliere sichere, effiziente SQL-Abfragen.",
                "themes": [
                    {
                        "id": 1,
                        "title": "Tabellen und Schlüssel",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Tabellen und Schlüssel.",
                        "contents": [
                            {
                                "title": "Tabellen und Schlüssel verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Tabellen und Schlüssel kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Tabellen und Schlüssel üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Tabellen und Schlüssel selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Beziehungen",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Beziehungen.",
                        "contents": [
                            {
                                "title": "Beziehungen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Beziehungen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Beziehungen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Beziehungen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "SELECT und Filter",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema SELECT und Filter.",
                        "contents": [
                            {
                                "title": "SELECT und Filter verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von SELECT und Filter kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "SELECT und Filter üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von SELECT und Filter selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "JOINs und Aggregationen",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema JOINs und Aggregationen.",
                        "contents": [
                            {
                                "title": "JOINs und Aggregationen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von JOINs und Aggregationen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "JOINs und Aggregationen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von JOINs und Aggregationen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Transaktionen",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Transaktionen.",
                        "contents": [
                            {
                                "title": "Transaktionen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Transaktionen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Transaktionen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Transaktionen selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Bibliotheksdatenbank",
                        "completed": false
                    }
                ]
            },
            {
                "id": 5,
                "title": "Phase 5",
                "shortDesc": "Entity Framework Core",
                "longDesc": "Greife mit Entity Framework Core auf relationale Datenbanken zu.",
                "themes": [
                    {
                        "id": 1,
                        "title": "DbContext und DbSet",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema DbContext und DbSet.",
                        "contents": [
                            {
                                "title": "DbContext und DbSet verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von DbContext und DbSet kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "DbContext und DbSet üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von DbContext und DbSet selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Modelle und Konventionen",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Modelle und Konventionen.",
                        "contents": [
                            {
                                "title": "Modelle und Konventionen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Modelle und Konventionen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Modelle und Konventionen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Modelle und Konventionen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Migrationen",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Migrationen.",
                        "contents": [
                            {
                                "title": "Migrationen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Migrationen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Migrationen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Migrationen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "LINQ-Abfragen",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema LINQ-Abfragen.",
                        "contents": [
                            {
                                "title": "LINQ-Abfragen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von LINQ-Abfragen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "LINQ-Abfragen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von LINQ-Abfragen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Beziehungen und Loading",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Beziehungen und Loading.",
                        "contents": [
                            {
                                "title": "Beziehungen und Loading verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Beziehungen und Loading kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Beziehungen und Loading üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Beziehungen und Loading selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Datenbank für einen Online-Shop",
                        "completed": false
                    }
                ]
            },
            {
                "id": 6,
                "title": "Phase 6",
                "shortDesc": "Professionelle REST APIs",
                "longDesc": "Mache APIs robust, verständlich und angenehm für andere Entwickler.",
                "themes": [
                    {
                        "id": 1,
                        "title": "DTOs und Mapping",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema DTOs und Mapping.",
                        "contents": [
                            {
                                "title": "DTOs und Mapping verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von DTOs und Mapping kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "DTOs und Mapping üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von DTOs und Mapping selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Validierung",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Validierung.",
                        "contents": [
                            {
                                "title": "Validierung verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Validierung kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Validierung üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Validierung selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Pagination und Filter",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Pagination und Filter.",
                        "contents": [
                            {
                                "title": "Pagination und Filter verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Pagination und Filter kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Pagination und Filter üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Pagination und Filter selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Globale Fehlerbehandlung",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Globale Fehlerbehandlung.",
                        "contents": [
                            {
                                "title": "Globale Fehlerbehandlung verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Globale Fehlerbehandlung kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Globale Fehlerbehandlung üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Globale Fehlerbehandlung selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Versionierung",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Versionierung.",
                        "contents": [
                            {
                                "title": "Versionierung verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Versionierung kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Versionierung üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Versionierung selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Versionierte Kunden-API",
                        "completed": false
                    },
                    {
                        "id": 2,
                        "title": "API-Dokumentation",
                        "completed": false
                    }
                ]
            },
            {
                "id": 7,
                "title": "Phase 7",
                "shortDesc": "Authentication, Authorization und Security",
                "longDesc": "Schütze Benutzerkonten, Endpunkte und sensible Daten.",
                "themes": [
                    {
                        "id": 1,
                        "title": "Identity-Grundlagen",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Identity-Grundlagen.",
                        "contents": [
                            {
                                "title": "Identity-Grundlagen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Identity-Grundlagen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Identity-Grundlagen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Identity-Grundlagen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Passwörter und Claims",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Passwörter und Claims.",
                        "contents": [
                            {
                                "title": "Passwörter und Claims verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Passwörter und Claims kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Passwörter und Claims üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Passwörter und Claims selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "JWT-Token",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema JWT-Token.",
                        "contents": [
                            {
                                "title": "JWT-Token verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von JWT-Token kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "JWT-Token üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von JWT-Token selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Rollen und Policies",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Rollen und Policies.",
                        "contents": [
                            {
                                "title": "Rollen und Policies verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Rollen und Policies kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Rollen und Policies üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Rollen und Policies selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Security-Checks",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Security-Checks.",
                        "contents": [
                            {
                                "title": "Security-Checks verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Security-Checks kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Security-Checks üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Security-Checks selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Geschütztes Benutzerportal",
                        "completed": false
                    }
                ]
            },
            {
                "id": 8,
                "title": "Phase 8",
                "shortDesc": "Architektur und Testing",
                "longDesc": "Strukturiere Backend-Anwendungen so, dass sie wartbar und testbar bleiben.",
                "themes": [
                    {
                        "id": 1,
                        "title": "Layered Architecture",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Layered Architecture.",
                        "contents": [
                            {
                                "title": "Layered Architecture verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Layered Architecture kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Layered Architecture üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Layered Architecture selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Services und Repositories",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Services und Repositories.",
                        "contents": [
                            {
                                "title": "Services und Repositories verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Services und Repositories kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Services und Repositories üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Services und Repositories selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Unit Tests",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Unit Tests.",
                        "contents": [
                            {
                                "title": "Unit Tests verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Unit Tests kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Unit Tests üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Unit Tests selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Integration Tests",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Integration Tests.",
                        "contents": [
                            {
                                "title": "Integration Tests verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Integration Tests kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Integration Tests üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Integration Tests selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Mocks und Testdaten",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Mocks und Testdaten.",
                        "contents": [
                            {
                                "title": "Mocks und Testdaten verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Mocks und Testdaten kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Mocks und Testdaten üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Mocks und Testdaten selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Testbare Bestellverwaltung",
                        "completed": false
                    },
                    {
                        "id": 2,
                        "title": "API-Testautomatisierung",
                        "completed": false
                    }
                ]
            },
            {
                "id": 9,
                "title": "Phase 9",
                "shortDesc": "GitHub, CI/CD und Production",
                "longDesc": "Automatisiere Qualitätssicherung, Builds und Deployments.",
                "themes": [
                    {
                        "id": 1,
                        "title": "Git-Workflow",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Git-Workflow.",
                        "contents": [
                            {
                                "title": "Git-Workflow verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Git-Workflow kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Git-Workflow üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Git-Workflow selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Branches und Pull Requests",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Branches und Pull Requests.",
                        "contents": [
                            {
                                "title": "Branches und Pull Requests verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Branches und Pull Requests kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Branches und Pull Requests üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Branches und Pull Requests selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "GitHub Actions",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema GitHub Actions.",
                        "contents": [
                            {
                                "title": "GitHub Actions verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von GitHub Actions kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "GitHub Actions üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von GitHub Actions selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Container und Umgebungen",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Container und Umgebungen.",
                        "contents": [
                            {
                                "title": "Container und Umgebungen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Container und Umgebungen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Container und Umgebungen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Container und Umgebungen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Monitoring im Betrieb",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Monitoring im Betrieb.",
                        "contents": [
                            {
                                "title": "Monitoring im Betrieb verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Monitoring im Betrieb kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Monitoring im Betrieb üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Monitoring im Betrieb selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "CI/CD-Pipeline für eine .NET-API",
                        "completed": false
                    }
                ]
            },
            {
                "id": 10,
                "title": "Phase 10",
                "shortDesc": "Fortgeschrittenes .NET und KI-Integration",
                "longDesc": "Setze fortgeschrittene .NET-Konzepte ein und integriere KI sinnvoll in Backend-Systeme.",
                "themes": [
                    {
                        "id": 1,
                        "title": "Performance und Caching",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Performance und Caching.",
                        "contents": [
                            {
                                "title": "Performance und Caching verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Performance und Caching kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Performance und Caching üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Performance und Caching selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Asynchrone Verarbeitung",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Asynchrone Verarbeitung.",
                        "contents": [
                            {
                                "title": "Asynchrone Verarbeitung verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Asynchrone Verarbeitung kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Asynchrone Verarbeitung üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Asynchrone Verarbeitung selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Messaging und Background Jobs",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Messaging und Background Jobs.",
                        "contents": [
                            {
                                "title": "Messaging und Background Jobs verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Messaging und Background Jobs kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Messaging und Background Jobs üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Messaging und Background Jobs selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "KI-Services anbinden",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema KI-Services anbinden.",
                        "contents": [
                            {
                                "title": "KI-Services anbinden verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von KI-Services anbinden kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "KI-Services anbinden üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von KI-Services anbinden selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Backend Engineering",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Backend Engineering.",
                        "contents": [
                            {
                                "title": "Backend Engineering verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Backend Engineering kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Backend Engineering üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Backend Engineering selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "KI-gestützter Support-Service",
                        "completed": false
                    },
                    {
                        "id": 2,
                        "title": "Skalierbare Backend-Plattform",
                        "completed": false
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "name": "Gitarre",
        "logo": "",
        "desc": "Lerne Akkorde, Rhythmen, Melodien und deine ersten vollständigen Songs auf der Gitarre.",
        "phases": [
            {
                "id": 1,
                "title": "Phase 1",
                "shortDesc": "Instrument und Haltung",
                "longDesc": "Lerne dein Instrument kennen und entwickle eine entspannte, kontrollierte Spielhaltung.",
                "themes": [
                    {
                        "id": 1,
                        "title": "Aufbau der Gitarre",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Aufbau der Gitarre.",
                        "contents": [
                            {
                                "title": "Aufbau der Gitarre verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Aufbau der Gitarre kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Aufbau der Gitarre üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Aufbau der Gitarre selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Saiten und Stimmung",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Saiten und Stimmung.",
                        "contents": [
                            {
                                "title": "Saiten und Stimmung verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Saiten und Stimmung kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Saiten und Stimmung üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Saiten und Stimmung selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Sitzhaltung",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Sitzhaltung.",
                        "contents": [
                            {
                                "title": "Sitzhaltung verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Sitzhaltung kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Sitzhaltung üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Sitzhaltung selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Plektrum halten",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Plektrum halten.",
                        "contents": [
                            {
                                "title": "Plektrum halten verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Plektrum halten kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Plektrum halten üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Plektrum halten selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Leere Saiten anschlagen",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Leere Saiten anschlagen.",
                        "contents": [
                            {
                                "title": "Leere Saiten anschlagen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Leere Saiten anschlagen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Leere Saiten anschlagen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Leere Saiten anschlagen selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Die eigene Gitarre richtig einrichten",
                        "completed": false
                    }
                ]
            },
            {
                "id": 2,
                "title": "Phase 2",
                "shortDesc": "Die ersten Akkorde",
                "longDesc": "Greife offene Akkorde und übe saubere, kontrollierte Wechsel.",
                "themes": [
                    {
                        "id": 1,
                        "title": "Akkorddiagramme lesen",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Akkorddiagramme lesen.",
                        "contents": [
                            {
                                "title": "Akkorddiagramme lesen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Akkorddiagramme lesen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Akkorddiagramme lesen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Akkorddiagramme lesen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "A-Moll und E-Dur",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema A-Moll und E-Dur.",
                        "contents": [
                            {
                                "title": "A-Moll und E-Dur verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von A-Moll und E-Dur kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "A-Moll und E-Dur üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von A-Moll und E-Dur selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "C-Dur und G-Dur",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema C-Dur und G-Dur.",
                        "contents": [
                            {
                                "title": "C-Dur und G-Dur verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von C-Dur und G-Dur kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "C-Dur und G-Dur üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von C-Dur und G-Dur selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "D-Dur und E-Moll",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema D-Dur und E-Moll.",
                        "contents": [
                            {
                                "title": "D-Dur und E-Moll verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von D-Dur und E-Moll kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "D-Dur und E-Moll üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von D-Dur und E-Moll selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Erste Akkordfolge",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Erste Akkordfolge.",
                        "contents": [
                            {
                                "title": "Erste Akkordfolge verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Erste Akkordfolge kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Erste Akkordfolge üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Erste Akkordfolge selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Akkordkarten für Anfänger",
                        "completed": false
                    }
                ]
            },
            {
                "id": 3,
                "title": "Phase 3",
                "shortDesc": "Rhythmus und Anschlag",
                "longDesc": "Entwickle ein stabiles Timing und begleite einfache Songs mit verschiedenen Schlagmustern.",
                "themes": [
                    {
                        "id": 1,
                        "title": "Viertelnoten",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Viertelnoten.",
                        "contents": [
                            {
                                "title": "Viertelnoten verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Viertelnoten kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Viertelnoten üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Viertelnoten selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Abschläge",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Abschläge.",
                        "contents": [
                            {
                                "title": "Abschläge verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Abschläge kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Abschläge üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Abschläge selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Auf- und Abschläge",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Auf- und Abschläge.",
                        "contents": [
                            {
                                "title": "Auf- und Abschläge verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Auf- und Abschläge kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Auf- und Abschläge üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Auf- und Abschläge selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Metronom verwenden",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Metronom verwenden.",
                        "contents": [
                            {
                                "title": "Metronom verwenden verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Metronom verwenden kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Metronom verwenden üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Metronom verwenden selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Pausen im Rhythmus",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Pausen im Rhythmus.",
                        "contents": [
                            {
                                "title": "Pausen im Rhythmus verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Pausen im Rhythmus kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Pausen im Rhythmus üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Pausen im Rhythmus selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Drei Songs mit einem Schlagmuster",
                        "completed": false
                    },
                    {
                        "id": 2,
                        "title": "Rhythmus-Übungsroutine",
                        "completed": false
                    }
                ]
            },
            {
                "id": 4,
                "title": "Phase 4",
                "shortDesc": "Barré-Akkorde",
                "longDesc": "Erweitere dein Repertoire und verbessere Kraft und Beweglichkeit der Greifhand.",
                "themes": [
                    {
                        "id": 1,
                        "title": "Barré-Technik",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Barré-Technik.",
                        "contents": [
                            {
                                "title": "Barré-Technik verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Barré-Technik kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Barré-Technik üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Barré-Technik selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "F-Dur",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema F-Dur.",
                        "contents": [
                            {
                                "title": "F-Dur verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von F-Dur kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "F-Dur üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von F-Dur selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Bm",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Bm.",
                        "contents": [
                            {
                                "title": "Bm verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Bm kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Bm üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Bm selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Akkordwechsel",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Akkordwechsel.",
                        "contents": [
                            {
                                "title": "Akkordwechsel verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Akkordwechsel kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Akkordwechsel üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Akkordwechsel selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Sauberkeit und Entspannung",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Sauberkeit und Entspannung.",
                        "contents": [
                            {
                                "title": "Sauberkeit und Entspannung verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Sauberkeit und Entspannung kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Sauberkeit und Entspannung üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Sauberkeit und Entspannung selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Barré-Akkord-Training",
                        "completed": false
                    }
                ]
            },
            {
                "id": 5,
                "title": "Phase 5",
                "shortDesc": "Melodien und Fingerpicking",
                "longDesc": "Spiele einzelne Melodien und kombiniere Bassnoten mit höheren Saiten.",
                "themes": [
                    {
                        "id": 1,
                        "title": "Tabulatur lesen",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Tabulatur lesen.",
                        "contents": [
                            {
                                "title": "Tabulatur lesen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Tabulatur lesen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Tabulatur lesen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Tabulatur lesen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Wechselschlag",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Wechselschlag.",
                        "contents": [
                            {
                                "title": "Wechselschlag verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Wechselschlag kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Wechselschlag üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Wechselschlag selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Daumen und Finger",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Daumen und Finger.",
                        "contents": [
                            {
                                "title": "Daumen und Finger verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Daumen und Finger kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Daumen und Finger üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Daumen und Finger selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Gebrochene Akkorde",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Gebrochene Akkorde.",
                        "contents": [
                            {
                                "title": "Gebrochene Akkorde verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Gebrochene Akkorde kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Gebrochene Akkorde üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Gebrochene Akkorde selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Einfache Melodien",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Einfache Melodien.",
                        "contents": [
                            {
                                "title": "Einfache Melodien verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Einfache Melodien kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Einfache Melodien üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Einfache Melodien selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Ein Fingerpicking-Stück",
                        "completed": false
                    }
                ]
            },
            {
                "id": 6,
                "title": "Phase 6",
                "shortDesc": "Erster kompletter Song",
                "longDesc": "Verbinde Akkorde, Rhythmus und Ausdruck zu einer vollständigen Songbegleitung.",
                "themes": [
                    {
                        "id": 1,
                        "title": "Songstruktur erkennen",
                        "completed": true,
                        "desc": "Grundlagen und praktische Übungen zum Thema Songstruktur erkennen.",
                        "contents": [
                            {
                                "title": "Songstruktur erkennen verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Songstruktur erkennen kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Songstruktur erkennen üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Songstruktur erkennen selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Intro und Outro",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Intro und Outro.",
                        "contents": [
                            {
                                "title": "Intro und Outro verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Intro und Outro kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Intro und Outro üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Intro und Outro selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Dynamik",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Dynamik.",
                        "contents": [
                            {
                                "title": "Dynamik verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Dynamik kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Dynamik üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Dynamik selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Im Takt bleiben",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Im Takt bleiben.",
                        "contents": [
                            {
                                "title": "Im Takt bleiben verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Im Takt bleiben kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Im Takt bleiben üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Im Takt bleiben selbstständig anwendest."
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Aufnahme und Feedback",
                        "completed": false,
                        "desc": "Grundlagen und praktische Übungen zum Thema Aufnahme und Feedback.",
                        "contents": [
                            {
                                "title": "Aufnahme und Feedback verstehen",
                                "content": "In diesem Thema lernst du die wichtigsten Grundlagen von Aufnahme und Feedback kennen und wendest sie in kleinen Beispielen an."
                            }
                        ],
                        "exercises": [
                            {
                                "title": "Aufnahme und Feedback üben",
                                "content": "Erstelle ein kleines Beispiel, in dem du die Inhalte von Aufnahme und Feedback selbstständig anwendest."
                            }
                        ]
                    }
                ],
                "finalProjects": [
                    {
                        "id": 1,
                        "title": "Ein kompletter Song von Anfang bis Ende",
                        "completed": false
                    },
                    {
                        "id": 2,
                        "title": "Erste eigene Songbegleitung",
                        "completed": false
                    }
                ]
            }
        ]
    }
];
