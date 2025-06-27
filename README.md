# AuraPlayer — A Personalized Music Player

**AuraPlayer** is a clean and responsive music player built using **HTML, CSS, and JavaScript**. It provides a simple yet interactive user interface for listening to songs with essential playback controls and an extra **AI-powered search feature** that lets users type their mood or feelings to get song suggestions or playlists.

---

## Built With

- **HTML5** — for structuring the UI
- **CSS3** — for styling, animations, and responsive layout
- **JavaScript** — for all player functionality, search handling, and AI feature integration
- **AI Integration** — via OpenAI or similar API (for mood-based song suggestions)

---

## Features

### Core Player Features
- Play / Pause / Next / Previous
- Song progress bar with seek support
- Volume control
- Playlist view

### AI Mood Search 
- Users can type how they feel:  
  _“I feel low and need a pick-me-up”_,  
  _“Play something chill for coding”_
- JavaScript sends this to an AI API (like OpenAI)
- AI returns mood-matching song titles or playlist themes
- Suggested songs are displayed dynamically

---

## How I Made It

1. **HTML**:  
   Structured the layout with sections for:
   - Song display
   - Controls (play/pause, next, etc.)
   - Playlist
   - Mood search input

2. **CSS**:  
   Used Flexbox & media queries for responsiveness.  
   Styled buttons, sliders, and the theme (light/dark toggle optional).

3. **JavaScript**:  
   - Managed audio playback using the `<audio>` element
   - Added event listeners to buttons and sliders
   - Controlled playlist navigation and progress bar updates
   - Integrated fetch API to call AI endpoint and display suggestions

4. **AI Search**:
   - On form submit, captured user mood text
   - Sent it to AI API via `fetch`
   - Displayed response as song suggestions (you can map them to local songs or streaming links)
