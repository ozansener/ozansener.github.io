title: Contact
link: contact.html
save_as: contact.html
sortorder: 4

<div class="map">
    <div tabindex="0" class="leaflet-container" id="map" style="width: inherit; height: 227px; position: relative;"></div>
    <script>
        var map = L.map('map').setView([37.4310000,-122.1734962], 16);
        L.tileLayer.provider('MapQuestOpen.OSM').addTo(map);
        L.marker([37.4301523,-122.1734962]).addTo(map)
        .bindPopup('<b style="font-size: 14px; line-height: 14px; margin-right: -15px;">Gates Building 142<br>Stanford, CA</b><br>os79[at]cornell[dot]edu', {
            offset: new L.Point(0,-40),
            closeButton: false
        })
        .openPopup();
    </script>
</div>

So long, and thanks for all the fish.
====================

Easiest way to contact me is e-mail. However, If you need to meet me in person, you can probably find me doing research in my office, procrastinating at Coupa cafe, or juggling at the main quad.</p>

Feel free to contact me anyway you like if you have questions and/or suggestions about my work or just want to discuss anything about machine learning, computer vision, robotics, statistics, mathematics, juggling, sci-fi or any <a href="https://xkcd.com/356/">nerdy</a> topic you can imagine.</p>
