
export function loadHomeScripts() {
    const script1 = document.createElement('script');
    script1.src = '/assets/application-1e4057be396220a4e9fabd2d26965040.js';
    document.body.appendChild(script1);
    script1.onload = () => {
        const script2 = document.createElement('script');
        script2.src = '/assets/scripts_of_individual_connect/home-423b82da22c7e4bf75cc742e4ef3c39a.js';
        document.body.appendChild(script2);
    };
}