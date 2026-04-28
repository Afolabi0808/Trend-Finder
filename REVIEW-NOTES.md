CreatorOS review notes

What I updated
- Escaped AI-generated content before inserting it into the DOM.
- Preserved multiline text safely for captions, tips, hooks, scene descriptions, and calendar details.
- Fixed PNG export so it renders a stable still frame without spawning an extra animation loop.
- Delayed blob URL cleanup slightly after video download starts to avoid browser timing issues.

Main risks found in the original file
- AI responses were interpolated directly into `innerHTML`, which could break layout or inject markup.
- The PNG export path reused the live draw routine in a way that also scheduled a new animation frame during export.
- Immediate blob URL revocation can interrupt downloads in some browsers.

Files in this folder
- `creator-os-fixed.html`
- `REVIEW-NOTES.md`
