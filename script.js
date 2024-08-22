function updateTime() {
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
        hour12: true // Ensure 12-hour format with AM/PM
    };

    const dateOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };

    // Australia (Sydney)
    const australiaDate = new Intl.DateTimeFormat('en-AU', { ...dateOptions, timeZone: 'Australia/Sydney' }).format(new Date());
    const australiaTime = new Intl.DateTimeFormat('en-AU', { ...timeOptions, timeZone: 'Australia/Sydney' }).format(new Date());
    document.getElementById('australia-date').innerText = australiaDate;
    document.getElementById('australia-time').innerText = australiaTime;

    // US (New York)
    const usDate = new Intl.DateTimeFormat('en-US', { ...dateOptions, timeZone: 'America/New_York' }).format(new Date());
    const usTime = new Intl.DateTimeFormat('en-US', { ...timeOptions, timeZone: 'America/New_York' }).format(new Date());
    document.getElementById('us-date').innerText = usDate;
    document.getElementById('us-time').innerText = usTime;

    // UK (London)
    const ukDate = new Intl.DateTimeFormat('en-GB', { ...dateOptions, timeZone: 'Europe/London' }).format(new Date());
    const ukTime = new Intl.DateTimeFormat('en-GB', { ...timeOptions, timeZone: 'Europe/London' }).format(new Date());
    document.getElementById('uk-date').innerText = ukDate;
    document.getElementById('uk-time').innerText = ukTime;

    // Berlin (Germany)
    const berlinDate = new Intl.DateTimeFormat('de-DE', { ...dateOptions, timeZone: 'Europe/Berlin' }).format(new Date());
    const berlinTime = new Intl.DateTimeFormat('de-DE', { ...timeOptions, timeZone: 'Europe/Berlin' }).format(new Date());
    document.getElementById('berlin-date').innerText = berlinDate;
    document.getElementById('berlin-time').innerText = berlinTime;

    // Philippines (Manila)
    const phDate = new Intl.DateTimeFormat('en-PH', { ...dateOptions, timeZone: 'Asia/Manila' }).format(new Date());
    const phTime = new Intl.DateTimeFormat('en-PH', { ...timeOptions, timeZone: 'Asia/Manila' }).format(new Date());
    document.getElementById('ph-date').innerText = phDate;
    document.getElementById('ph-time').innerText = phTime;

    // EST (Eastern Standard Time)
    const estDate = new Intl.DateTimeFormat('en-US', { ...dateOptions, timeZone: 'America/New_York' }).format(new Date());
    const estTime = new Intl.DateTimeFormat('en-US', { ...timeOptions, timeZone: 'America/New_York' }).format(new Date());
    document.getElementById('est-date').innerText = estDate;
    document.getElementById('est-time').innerText = estTime;
}

setInterval(updateTime, 1000); // Update every second
updateTime(); // Initial call
