# 🌐 Portfolio Angular

Applicazione **Portfolio personale** realizzata con **Angular 20**.  
Presenta i miei **progetti, competenze, servizi e contatti** in un design moderno, responsive e completamente dinamico.

---

## 🚀 Tecnologie principali

- ⚙️ **Angular 20**
- 🧠 **TypeScript**
- 🎨 **HTML / SCSS**
- 🧩 **Angular Material**
- 🔁 **Componenti modulari e riutilizzabili**

---

## 🧱 Struttura del progetto

Consulta il file [📁 `project-structure.md`](./project-structure.md) per la gerarchia completa della cartella `src/app/`.

---

## 💼 Sezioni principali

| Sezione | Descrizione |
|----------|-------------|
| 🏠 **Home** | Pagina principale con Hero, introduzione e link rapidi |
| 💼 **Projects** | Elenco dei progetti con card dedicate e dati importati da `project.data.ts` |
| 🛠️ **Skills** | Competenze tecniche e tecnologie utilizzate |
| 💬 **Testimony** | Testimonianze o feedback ricevuti |
| 🧩 **Services** | Servizi offerti, caricati da `services.data.ts` |
| 📞 **Contact** | Sezione contatti o form per richieste |
| 🔐 **Privacy** | Pagina dedicata alla Privacy Policy |
| 🍪 **Cookie Banner** | Gestione informativa cookie |
| 🔝 **Go Top** | Pulsante per tornare in cima alla pagina |

---

## 🧩 Componenti globali e condivisi

- **Header / Footer** → layout globale del sito  
- **Project-card** → visualizzazione singolo progetto  
- **Cookie-banner** → informativa cookie  
- **Go-top** → pulsante “torna su”  
- **Direttive personalizzate** → gestione eventi (es. `ga-event.directive.ts`)

---

## ⚙️ Avvio del progetto

### 🔹 Installazione delle dipendenze
Assicurati di aver installato [Node.js](https://nodejs.org/) e [Angular CLI](https://angular.io/cli) sul tuo sistema.

```bash
npm install