export function generateUniqueId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }
  
  export function formatTime(timestamp: number): string {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  }
  
  export function formatDate(timestamp: number): string {
    const now = new Date();
    const date = new Date(timestamp);
    
    // If today, return the time
    if (date.toDateString() === now.toDateString()) {
      return 'Today';
    }
    
    // If yesterday, return 'Yesterday'
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    }
    
    // Otherwise, return the date
    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
    
    // If different year, include the year
    if (date.getFullYear() !== now.getFullYear()) {
      options.year = 'numeric';
    }
    
    return date.toLocaleDateString('en-US', options);
  }