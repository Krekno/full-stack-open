'''mermaid
sequence diagram
    participant browser
    participant server

    browser->>server: POST new_note
    activate server
    server-->>browser: status code 302
    deactivate server

    Note right of browser: Server redirect URL to https://studies.cs.helsinki.fi/exampleapp/notes

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    Note right of browser: browser reloads

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: javascript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "r", "date": "2025-01-25T16:50:25.059Z" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes
'''