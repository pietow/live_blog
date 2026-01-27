import { createClient } from "@libsql/client";

// filepath: c:\Users\pprot\alphatraining_react_ts_live\live_blog\src\scripts\createDatabase.mjs

const client = createClient({
    url: "file:src/data/blog.db",
});

async function createDatabase() {
    try {
        await client.execute(`
            CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT NOT NULL
            )
        `);
        console.log("✓ Tabelle 'posts' erstellt");
    } catch (error) {
        console.error("Fehler beim Erstellen der Tabelle:", error);
    } finally {
        client.close();
    }
}

createDatabase();

const posts = [
    { id: 1, title: "Erste Schritte mit React", description: "Eine Einführung in React und JSX" },
    { id: 2, title: "TypeScript Grundlagen", description: "Typsicherheit in JavaScript" },
    { id: 3, title: "Datenbanken mit SQLite", description: "Lokale Datenspeicherung leicht gemacht" },
    { id: 4, title: "REST APIs", description: "Kommunikation zwischen Client und Server" },
    { id: 5, title: "State Management", description: "Verwaltung des Anwendungszustands" },
    { id: 6, title: "Komponenten Design", description: "Best Practices für wiederverwendbare Komponenten" },
    { id: 7, title: "Performance Optimierung", description: "Schnellere React Anwendungen" },
    { id: 8, title: "Testing in JavaScript", description: "Unit Tests und Integration Tests" },
    { id: 9, title: "Async/Await Patterns", description: "Asynchrone Programmierung vereinfacht" },
    { id: 10, title: "Web Security", description: "Sicherheit in modernen Webanwendungen" }
];

async function insertPosts() {
    const client = createClient({
        url: "file:src/data/blog.db",
    });
    
    try {
        for (const post of posts) {
            await client.execute({
                sql: "INSERT INTO posts (id, title, description) VALUES (?, ?, ?)",
                args: [post.id, post.title, post.description]
            });
        }
        console.log("✓ Posts eingefügt");
    } catch (error) {
        console.error("Fehler beim Einfügen der Posts:", error);
    } finally {
        client.close();
    }
}

insertPosts();

console.log('DB erstellt und mit Daten gefüllt')