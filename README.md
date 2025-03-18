# Streaming Episode Generator

## Description
 A web-based tool designed to streamline the process of creating and managing streaming episode lists. With support for multiple resolutions, languages, and server options per episode, it helps content managers efficiently organize and update their streaming content.

## Core Features
- **Multi-Resolution Support**
  - Add multiple streaming sources per episode
  - Support for both SUB and DUB versions
  - Customizable server labels
  
- **Episode Management**
  - Add/Update episodes with titles
  - Automatic episode number validation
  - Flexible episode numbering system
  
- **Configuration System**
  - Customizable Streaming ID
  - Configurable Post ID
  - Adjustable maximum episode limit

- **Data Management**
  - Local storage for data persistence
  - Import/Export functionality
  - History tracking per streaming series
  
- **User Interface**
  - Dark mode support
  - Responsive design
  - Copy-to-clipboard functionality
  - User-friendly form validation

## How to Use

### Basic Configuration
1. Set your initial configuration:
   ```
   Streaming ID: Your anime title
   Post ID: Your post identifier
   Max Episode: Maximum number of episodes
   ```
2. Click "Update Konfigurasi" to save settings

### Adding Episodes
1. Fill in the episode details:
   ```
   Judul: Episode title
   Episode: Episode number
   ```

2. Add streaming sources:
   ```
   Server: e.g., "Gdrive 480p"
   URL: Streaming embed URL
   Bahasa: Choose SUB or DUB
   ```

3. Click "+ Tambah Resolusi" to add more resolutions

4. Click "Tambah Episode" to save

### Managing Data
- **Export**: Click "Export History" to backup data
- **Import**: Click "Import History" to restore data
- **Clear**: Use "Clear History" to reset all data

### Output
- Generated code appears in the textarea
- Click "Copy" to copy to clipboard
- Format follows the standard streaming configuration structure

## Getting Started
1. Clone the repository
2. Open post_steam_generator.html in a modern web browser
3. Configure your initial settings
4. Start adding episodes

## Browser Support
- Chrome (recommended)
- Firefox
- Edge
- Safari

## Notes
- All data is stored locally in your browser
- Regular backups recommended using Export feature
- Clear browser data will reset all configurations
