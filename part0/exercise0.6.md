```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST new_note_spa
    activate server
    server-->>browser: status code 201
    deactivate server
```