const translation = {
  createApp: 'Neue App erstellen',
  types: {
    all: 'Alle',
    assistant: 'Assistent',
    completion: 'Vervollständigung',
  },
  modes: {
    completion: 'Textgenerator',
    chat: 'Basisassistent',
  },
  createFromConfigFile: 'App aus Konfigurationsdatei erstellen',
  deleteAppConfirmTitle: 'Diese App löschen?',
  deleteAppConfirmContent:
    'Das Löschen der App ist unwiderruflich. Nutzer werden keinen Zugang mehr zu Ihrer App haben, und alle Prompt-Konfigurationen und Logs werden dauerhaft gelöscht.',
  appDeleted: 'App gelöscht',
  appDeleteFailed: 'Löschen der App fehlgeschlagen',
  join: 'Treten Sie der Gemeinschaft bei',
  communityIntro:
    'Diskutieren Sie mit Teammitgliedern, Mitwirkenden und Entwicklern auf verschiedenen Kanälen.',
  roadmap: 'Sehen Sie unseren Fahrplan',
  appNamePlaceholder: 'Bitte geben Sie den Namen der App ein',
  newApp: {
    startToCreate: 'Lassen Sie uns mit Ihrer neuen App beginnen',
    captionName: 'App-Symbol & Name',
    captionAppType: 'Welchen Typ von App möchten Sie erstellen?',
    previewDemo: 'Vorschau-Demo',
    chatApp: 'Assistent',
    chatAppIntro:
      'Ich möchte eine Chat-basierte Anwendung bauen. Diese App verwendet ein Frage-Antwort-Format und ermöglicht mehrere Runden kontinuierlicher Konversation.',
    agentAssistant: 'Neuer Agentenassistent',
    completeApp: 'Textgenerator',
    completeAppIntro:
      'Ich möchte eine Anwendung erstellen, die hochwertigen Text basierend auf Aufforderungen generiert, wie z.B. das Erstellen von Artikeln, Zusammenfassungen, Übersetzungen und mehr.',
    showTemplates: 'Ich möchte aus einer Vorlage wählen',
    hideTemplates: 'Zurück zur Modusauswahl',
    Create: 'Erstellen',
    Cancel: 'Abbrechen',
    nameNotEmpty: 'Name darf nicht leer sein',
    appTemplateNotSelected: 'Bitte wählen Sie eine Vorlage',
    appTypeRequired: 'Bitte wählen Sie einen App-Typ',
    appCreated: 'App erstellt',
    appCreateFailed: 'Erstellen der App fehlgeschlagen',
  },
  editApp: 'App bearbeiten',
  editAppTitle: 'App-Informationen bearbeiten',
  editDone: 'App-Informationen wurden aktualisiert',
  editFailed: 'Aktualisierung der App-Informationen fehlgeschlagen',
  iconPicker: {
    ok: 'OK',
    cancel: 'Abbrechen',
    emoji: 'Emoji',
    image: 'Bild',
  },
  switch: 'Zu Workflow-Orchestrierung wechseln',
  switchTipStart: 'Eine neue App-Kopie wird für Sie erstellt, und die neue Kopie wird zur Workflow-Orchestrierung wechseln. Die neue Kopie wird ',
  switchTip: 'nicht erlauben',
  switchTipEnd: ' zur Basis-Orchestrierung zurückzuwechseln.',
  switchLabel: 'Die zu erstellende App-Kopie',
  removeOriginal: 'Ursprüngliche App löschen',
  switchStart: 'Wechsel starten',
  typeSelector: {
    all: 'ALLE Typen',
    chatbot: 'Chatbot',
    agent: 'Agent',
    workflow: 'Workflow',
    completion: 'Vervollständigung',
  },
  tracing: {
    title: 'Anwendungsleistung nachverfolgen',
    description: 'Konfiguration eines Drittanbieter-LLMOps-Anbieters und Nachverfolgung der Anwendungsleistung.',
    config: 'Konfigurieren',
    collapse: 'Einklappen',
    expand: 'Ausklappen',
    tracing: 'Nachverfolgung',
    disabled: 'Deaktiviert',
    disabledTip: 'Bitte zuerst den Anbieter konfigurieren',
    enabled: 'In Betrieb',
    tracingDescription: 'Erfassung des vollständigen Kontexts der Anwendungsausführung, einschließlich LLM-Aufrufe, Kontext, Prompts, HTTP-Anfragen und mehr, auf einer Nachverfolgungsplattform von Drittanbietern.',
    configProviderTitle: {
      configured: 'Konfiguriert',
      notConfigured: 'Anbieter konfigurieren, um Nachverfolgung zu aktivieren',
      moreProvider: 'Weitere Anbieter',
    },
    langsmith: {
      title: 'LangSmith',
      description: 'Eine All-in-One-Entwicklerplattform für jeden Schritt des LLM-gesteuerten Anwendungslebenszyklus.',
    },
    langfuse: {
      title: 'Langfuse',
      description: 'Traces, Bewertungen, Prompt-Management und Metriken zum Debuggen und Verbessern Ihrer LLM-Anwendung.',
    },
    inUse: 'In Verwendung',
    configProvider: {
      title: 'Konfigurieren ',
      placeholder: 'Geben Sie Ihren {{key}} ein',
      project: 'Projekt',
      publicKey: 'Öffentlicher Schlüssel',
      secretKey: 'Geheimer Schlüssel',
      viewDocsLink: '{{key}}-Dokumentation ansehen',
      removeConfirmTitle: '{{key}}-Konfiguration entfernen?',
      removeConfirmContent: 'Die aktuelle Konfiguration wird verwendet. Das Entfernen wird die Nachverfolgungsfunktion ausschalten.',
    },
  },
}

export default translation
