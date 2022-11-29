import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import client from "../client";
import { H1, H2, H3 } from "../components/utils/headlines";
import { PortableText } from "@portabletext/react";

export default function About({ dataStart }) {
    // useEffect(() => {
    //     console.log(dataStart, dataNews);
    // }, []);

    return (
        <MainContainer width="w-full col-span-12 md:col-span-9 md:ml-[320px] overflow-hidden">
            <Head>
                <title>Eva Maria Schartmüller</title>
            </Head>

            <div className="col-span-12 md:col-span-6 sm:pt-28">
                <div className="texte mt-8 px-12 md:px-0">
                    <p>
                        <strong>Datenschutzerklärung</strong>
                    </p>

                    <p>
                        <strong>Einleitung und Überblick</strong>
                    </p>

                    <p>
                        Wir haben diese Datenschutzerklärung (Fassung 17.02.2022-111947866) verfasst, um Ihnen gemäß der
                        Vorgaben der&nbsp;
                        <a
                            href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&amp;tid=111947866"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Datenschutz-Grundverordnung (EU) 2016/679
                        </a>
                        &nbsp;und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz
                        Daten) wir als Verantwortliche – und die von uns beauftragten Auftragsverarbeiter (z. B.
                        Provider) – verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie
                        haben. Die verwendeten Begriffe sind geschlechtsneutral zu verstehen.
                        <br />
                        <strong>Kurz gesagt:</strong>&nbsp;Wir informieren Sie umfassend über Daten, die wir über Sie
                        verarbeiten.
                    </p>

                    <p>
                        Datenschutzerklärungen klingen für gewöhnlich sehr technisch und verwenden juristische
                        Fachbegriffe. Diese Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge so einfach
                        und transparent wie möglich beschreiben. Soweit es der Transparenz förderlich ist, werden
                        technische&nbsp;<strong>Begriffe leserfreundlich erklärt</strong>,&nbsp;<strong>Links</strong>
                        &nbsp;zu weiterführenden Informationen geboten und&nbsp;<strong>Grafiken</strong>&nbsp;zum
                        Einsatz gebracht. Wir informieren damit in klarer und einfacher Sprache, dass wir im Rahmen
                        unserer Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten, wenn eine
                        entsprechende gesetzliche Grundlage gegeben ist. Das ist sicher nicht möglich, wenn man
                        möglichst knappe, unklare und juristisch-technische Erklärungen abgibt, so wie sie im Internet
                        oft Standard sind, wenn es um Datenschutz geht. Ich hoffe, Sie finden die folgenden
                        Erläuterungen interessant und informativ und vielleicht ist die eine oder andere Information
                        dabei, die Sie noch nicht kannten.
                        <br />
                        Wenn trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die unten bzw. im Impressum
                        genannte verantwortliche Stelle zu wenden, den vorhandenen Links zu folgen und sich weitere
                        Informationen auf Drittseiten anzusehen. Unsere Kontaktdaten finden Sie selbstverständlich auch
                        im Impressum.
                    </p>

                    <p>
                        <strong>Anwendungsbereich</strong>
                    </p>

                    <p>
                        Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen
                        Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter)
                        verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1
                        DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische Anschrift einer Person. Die
                        Verarbeitung personenbezogener Daten sorgt dafür, dass wir unsere Dienstleistungen und Produkte
                        anbieten und abrechnen können, sei es online oder offline. Der Anwendungsbereich dieser
                        Datenschutzerklärung umfasst:
                    </p>

                    <ul>
                        <li>alle Onlineauftritte (Websites, Onlineshops), die wir betreiben</li>
                        <li>Social Media Auftritte und E-Mail-Kommunikation</li>
                        <li>mobile Apps für Smartphones und andere Geräte</li>
                    </ul>

                    <p>
                        <strong>Kurz gesagt:</strong>&nbsp;Die Datenschutzerklärung gilt für alle Bereiche, in denen
                        personenbezogene Daten im Unternehmen über die genannten Kanäle strukturiert verarbeitet werden.
                        Sollten wir außerhalb dieser Kanäle mit Ihnen in Rechtsbeziehungen eintreten, werden wir Sie
                        gegebenenfalls gesondert informieren.
                    </p>

                    <p>
                        <strong>Rechtsgrundlagen</strong>
                    </p>

                    <p>
                        In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den
                        rechtlichen Grundsätzen und Vorschriften, also den Rechtsgrundlagen der
                        Datenschutz-Grundverordnung, die uns ermöglichen, personenbezogene Daten zu verarbeiten.
                        <br />
                        Was das EU-Recht betrifft, beziehen wir uns auf die VERORDNUNG (EU) 2016/679 DES EUROPÄISCHEN
                        PARLAMENTS UND DES RATES vom 27. April 2016. Diese Datenschutz-Grundverordnung der EU können Sie
                        selbstverständlich online auf EUR-Lex, dem Zugang zum EU-Recht, unter&nbsp;
                        <a
                            href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679&amp;tid=111947866"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=celex%3A32016R0679
                        </a>
                        &nbsp;nachlesen.
                    </p>

                    <p>Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:</p>

                    <ol>
                        <li>
                            <strong>Einwilligung</strong>&nbsp;(Artikel 6 Absatz 1 lit. a DSGVO): Sie haben uns Ihre
                            Einwilligung gegeben, Daten zu einem bestimmten Zweck zu verarbeiten. Ein Beispiel wäre die
                            Speicherung Ihrer eingegebenen Daten eines Kontaktformulars.
                        </li>
                        <li>
                            <strong>Vertrag</strong>&nbsp;(Artikel 6 Absatz 1 lit. b DSGVO): Um einen Vertrag oder
                            vorvertragliche Verpflichtungen mit Ihnen zu erfüllen, verarbeiten wir Ihre Daten. Wenn wir
                            zum Beispiel einen Kaufvertrag mit Ihnen abschließen, benötigen wir vorab personenbezogene
                            Informationen.
                        </li>
                        <li>
                            <strong>Rechtliche Verpflichtung</strong>&nbsp;(Artikel 6 Absatz 1 lit. c DSGVO): Wenn wir
                            einer rechtlichen Verpflichtung unterliegen, verarbeiten wir Ihre Daten. Zum Beispiel sind
                            wir gesetzlich verpflichtet Rechnungen für die Buchhaltung aufzuheben. Diese enthalten in
                            der Regel personenbezogene Daten.
                        </li>
                        <li>
                            <strong>Berechtigte Interessen</strong>&nbsp;(Artikel 6 Absatz 1 lit. f DSGVO): Im Falle
                            berechtigter Interessen, die Ihre Grundrechte nicht einschränken, behalten wir uns die
                            Verarbeitung personenbezogener Daten vor. Wir müssen zum Beispiel gewisse Daten verarbeiten,
                            um unsere Website sicher und wirtschaftlich effizient betreiben zu können. Diese
                            Verarbeitung ist somit ein berechtigtes Interesse.
                        </li>
                    </ol>

                    <p>
                        Weitere Bedingungen wie die Wahrnehmung von Aufnahmen im öffentlichen Interesse und Ausübung
                        öffentlicher Gewalt sowie dem Schutz lebenswichtiger Interessen treten bei uns in der Regel
                        nicht auf. Soweit eine solche Rechtsgrundlage doch einschlägig sein sollte, wird diese an der
                        entsprechenden Stelle ausgewiesen.
                    </p>

                    <p>Zusätzlich zu der EU-Verordnung gelten auch noch nationale Gesetze:</p>

                    <ul>
                        <li>
                            In&nbsp;<strong>Österreich</strong>&nbsp;ist dies das Bundesgesetz zum Schutz natürlicher
                            Personen bei der Verarbeitung personenbezogener Daten (<strong>Datenschutzgesetz</strong>),
                            kurz&nbsp;<strong>DSG</strong>.
                        </li>
                        <li>
                            In&nbsp;<strong>Deutschland</strong>&nbsp;gilt das&nbsp;
                            <strong>Bundesdatenschutzgesetz</strong>, kurz<strong>&nbsp;BDSG</strong>.
                        </li>
                    </ul>

                    <p>
                        Sofern weitere regionale oder nationale Gesetze zur Anwendung kommen, informieren wir Sie in den
                        folgenden Abschnitten darüber.
                    </p>

                    <p>
                        <strong>Kontaktdaten des Verantwortlichen</strong>
                    </p>

                    <p>
                        Sollten Sie Fragen zum Datenschutz haben, finden Sie nachfolgend die Kontaktdaten der
                        verantwortlichen Person bzw. Stelle:
                        <br />
                        Eva Maria Schartmüller
                        <br />
                        E-Mail:&nbsp;office@schartmueller.com
                        <br />
                        Telefon:&nbsp;+43 (0)6767907617
                        <br />
                        Impressum:&nbsp;<a href="https://www.robertreszner.com/">https://www.schartmueller.com</a>
                    </p>

                    <p>
                        <strong>Speicherdauer</strong>
                    </p>

                    <p>
                        Dass wir personenbezogene Daten nur so lange speichern, wie es für die Bereitstellung unserer
                        Dienstleistungen und Produkte unbedingt notwendig ist, gilt als generelles Kriterium bei uns.
                        Das bedeutet, dass wir personenbezogene Daten löschen, sobald der Grund für die
                        Datenverarbeitung nicht mehr vorhanden ist. In einigen Fällen sind wir gesetzlich dazu
                        verpflichtet, bestimmte Daten auch nach Wegfall des ursprüngliches Zwecks zu speichern, zum
                        Beispiel zu Zwecken der Buchführung.
                    </p>

                    <p>
                        Sollten Sie die Löschung Ihrer Daten wünschen oder die Einwilligung zur Datenverarbeitung
                        widerrufen, werden die Daten so rasch wie möglich und soweit keine Pflicht zur Speicherung
                        besteht, gelöscht.
                    </p>

                    <p>
                        Über die konkrete Dauer der jeweiligen Datenverarbeitung informieren wir Sie weiter unten,
                        sofern wir weitere Informationen dazu haben.
                    </p>

                    <p>
                        <strong>Rechte laut Datenschutz-Grundverordnung</strong>
                    </p>

                    <p>
                        Laut Artikel 13 DSGVO stehen Ihnen die folgenden Rechte zu, damit es zu einer fairen und
                        transparenten Verarbeitung von Daten kommt:
                    </p>

                    <ul>
                        <li>
                            Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht darüber, ob wir Daten von Ihnen
                            verarbeiten. Sollte das zutreffen, haben Sie Recht darauf eine Kopie der Daten zu erhalten
                            und die folgenden Informationen zu erfahren:
                            <ul>
                                <li>zu welchem Zweck wir die Verarbeitung durchführen;</li>
                                <li>die Kategorien, also die Arten von Daten, die verarbeitet werden;</li>
                                <li>
                                    wer diese Daten erhält und wenn die Daten an Drittländer übermittelt werden, wie die
                                    Sicherheit garantiert werden kann;
                                </li>
                                <li>wie lange die Daten gespeichert werden;</li>
                                <li>
                                    das Bestehen des Rechts auf Berichtigung, Löschung oder Einschränkung der
                                    Verarbeitung und dem Widerspruchsrecht gegen die Verarbeitung;
                                </li>
                                <li>
                                    dass Sie sich bei einer Aufsichtsbehörde beschweren können (Links zu diesen Behörden
                                    finden Sie weiter unten);
                                </li>
                                <li>die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben haben;</li>
                                <li>
                                    ob Profiling durchgeführt wird, ob also Daten automatisch ausgewertet werden, um zu
                                    einem persönlichen Profil von Ihnen zu gelangen.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der Daten, was bedeutet, dass wir
                            Daten richtig stellen müssen, falls Sie Fehler finden.
                        </li>
                        <li>
                            Sie haben laut Artikel 17 DSGVO das Recht auf Löschung („Recht auf Vergessenwerden“), was
                            konkret bedeutet, dass Sie die Löschung Ihrer Daten verlangen dürfen.
                        </li>
                        <li>
                            Sie haben laut Artikel 18 DSGVO das Recht auf Einschränkung der Verarbeitung, was bedeutet,
                            dass wir die Daten nur mehr speichern dürfen aber nicht weiter verwenden.
                        </li>
                        <li>
                            Sie haben laut Artikel 19 DSGVO das Recht auf Datenübertragbarkeit, was bedeutet, dass wir
                            Ihnen auf Anfrage Ihre Daten in einem gängigen Format zur Verfügung stellen.
                        </li>
                        <li>
                            Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches nach Durchsetzung eine
                            Änderung der Verarbeitung mit sich bringt.
                            <ul>
                                <li>
                                    Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e (öffentliches
                                    Interesse, Ausübung öffentlicher Gewalt) oder Artikel 6 Abs. 1 lit. f (berechtigtes
                                    Interesse) basiert, können Sie gegen die Verarbeitung Widerspruch einlegen. Wir
                                    prüfen danach so rasch wie möglich, ob wir diesem Widerspruch rechtlich nachkommen
                                    können.
                                </li>
                                <li>
                                    Werden Daten verwendet, um Direktwerbung zu betreiben, können Sie jederzeit gegen
                                    diese Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht
                                    mehr für Direktmarketing verwenden.
                                </li>
                                <li>
                                    Werden Daten verwendet, um Profiling zu betreiben, können Sie jederzeit gegen diese
                                    Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für
                                    Profiling verwenden.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Sie haben laut Artikel 22 DSGVO unter Umständen das Recht, nicht einer ausschließlich auf
                            einer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;automatisierten
                            Verarbeitung (zum Beispiel Profiling) beruhenden Entscheidung unterworfen zu werden.
                        </li>
                    </ul>

                    <p>
                        <strong>Kurz gesagt:</strong>&nbsp;Sie haben Rechte – zögern Sie nicht, die oben gelistete
                        verantwortliche Stelle bei uns zu kontaktieren!
                    </p>

                    <p>
                        Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder
                        Ihre datenschutzrechtlichen Ansprüche in sonst einer Weise verletzt worden sind, können Sie sich
                        bei der Aufsichtsbehörde beschweren. Diese ist für Österreich die Datenschutzbehörde, deren
                        Website Sie unter&nbsp;
                        <a href="https://www.dsb.gv.at/?tid=111947866" target="_blank" rel="noreferrer noopener">
                            https://www.dsb.gv.at/
                        </a>
                        &nbsp;finden. In Deutschland gibt es für jedes Bundesland einen Datenschutzbeauftragten. Für
                        nähere Informationen können Sie sich an die&nbsp;
                        <a
                            href="https://www.bfdi.bund.de/DE/Home/home_node.html"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)
                        </a>
                        &nbsp;wenden. Für unser Unternehmen ist die folgende lokale Datenschutzbehörde zuständig:
                    </p>

                    <p>Österreich Datenschutzbehörde</p>

                    <p>
                        <strong>Leiterin:&nbsp;</strong>Mag. Dr. Andrea Jelinek
                        <strong>
                            <br />
                            Adresse:&nbsp;
                        </strong>
                        Barichgasse 40-42, 1030 Wien
                        <strong>
                            <br />
                            Telefonnr.:&nbsp;
                        </strong>
                        +43 1 52&nbsp;152-0
                        <strong>
                            <br />
                            E-Mail-Adresse:&nbsp;
                        </strong>
                        dsb@dsb.gv.at&nbsp;
                        <strong>
                            <br />
                            Website:&nbsp;
                        </strong>
                        <a href="https://www.dsb.gv.at/" target="_blank" rel="noreferrer noopener">
                            https://www.dsb.gv.at/
                        </a>
                    </p>

                    <p>
                        <strong>Cookies</strong>
                    </p>

                    <figure className="wp-block-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Cookies Zusammenfassung</strong>
                                        <br />
                                        Betroffene: Besucher der Website
                                        <br />
                                        Zweck: abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter unten
                                        bzw. beim Hersteller der Software, der das Cookie setzt.
                                        <br />
                                        Verarbeitete Daten: Abhängig vom jeweils eingesetzten Cookie. Mehr Details dazu
                                        finden Sie weiter unten bzw. beim Hersteller der Software, der das Cookie setzt.
                                        <br />
                                        Speicherdauer: abhängig vom jeweiligen Cookie, kann von Stunden bis hin zu
                                        Jahren variieren
                                        <br />
                                        &#x2696;&#xfe0f;&nbsp;Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO
                                        (Einwilligung), Art. 6 Abs. 1 lit.f DSGVO (Berechtigte Interessen)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </figure>

                    <p>
                        <strong>Was sind Cookies?</strong>
                    </p>

                    <p>
                        Unsere Website verwendet HTTP-Cookies, um nutzerspezifische Daten zu speichern.
                        <br />
                        Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende
                        Datenschutzerklärung besser verstehen.
                    </p>

                    <p>
                        Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind
                        beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten
                        Websites speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.
                    </p>

                    <p>
                        Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle
                        Websites verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere
                        Cookies für andere Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von unserer
                        Website auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden automatisch im
                        Cookie-Ordner, quasi dem “Hirn” Ihres Browsers, untergebracht. Ein Cookie besteht aus einem
                        Namen und einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein oder mehrere
                        Attribute angegeben werden.
                    </p>

                    <p>
                        Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche
                        Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die
                        „userbezogenen“ Informationen an unsere Seite zurück. Dank der Cookies weiß unsere Website, wer
                        Sie sind und bietet Ihnen die Einstellung, die Sie gewohnt sind. In einigen Browsern hat jedes
                        Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in einer
                        einzigen Datei gespeichert.
                    </p>

                    <p>
                        Die folgende Grafik zeigt eine mögliche Interaktion zwischen einem Webbrowser wie z. B. Chrome
                        und dem Webserver. Dabei fordert der Webbrowser eine Website an und erhält vom Server ein Cookie
                        zurück, welches der Browser erneut verwendet, sobald eine andere Seite angefordert wird.
                    </p>

                    <p>
                        Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden
                        direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Websites (z.B.
                        Google Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere
                        Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein
                        paar Jahren. Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner oder
                        andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres PCs zugreifen.
                    </p>

                    <p>So können zum Beispiel Cookie-Daten aussehen:</p>

                    <p>
                        <strong>Name:</strong>&nbsp;_ga
                        <br />
                        <strong>Wert:</strong>&nbsp;GA1.2.1326744211.152111947866-9
                        <br />
                        <strong>Verwendungszweck:</strong>&nbsp;Unterscheidung der Websitebesucher
                        <br />
                        <strong>Ablaufdatum:</strong>&nbsp;nach 2 Jahren
                    </p>

                    <p>Diese Mindestgrößen sollte ein Browser unterstützen können:</p>

                    <ul>
                        <li>Mindestens 4096 Bytes pro Cookie</li>
                        <li>Mindestens 50 Cookies pro Domain</li>
                        <li>Mindestens 3000 Cookies insgesamt</li>
                    </ul>

                    <p>
                        <strong>Welche Arten von Cookies gibt es?</strong>
                    </p>

                    <p>
                        Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und
                        wird in den folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle möchten wir
                        kurz auf die verschiedenen Arten von HTTP-Cookies eingehen.
                    </p>

                    <p>Man kann 4 Arten von Cookies unterscheiden:</p>

                    <p>
                        <strong>
                            Unerlässliche Cookies
                            <br />
                        </strong>
                        Diese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum Beispiel
                        braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen
                        Seiten weitersurft und später erst zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht
                        gelöscht, selbst wenn der User sein Browserfenster schließt.
                    </p>

                    <p>
                        <strong>
                            Zweckmäßige Cookies
                            <br />
                        </strong>
                        Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen
                        bekommt. Zudem werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Website
                        bei verschiedenen Browsern gemessen.
                    </p>

                    <p>
                        <strong>
                            Zielorientierte Cookies
                            <br />
                        </strong>
                        Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene
                        Standorte, Schriftgrößen oder Formulardaten gespeichert.
                    </p>

                    <p>
                        <strong>
                            Werbe-Cookies
                            <br />
                        </strong>
                        Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell
                        angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.
                    </p>

                    <p>
                        Üblicherweise werden Sie beim erstmaligen Besuch einer Website gefragt, welche dieser
                        Cookiearten Sie zulassen möchten. Und natürlich wird diese Entscheidung auch in einem Cookie
                        gespeichert.
                    </p>

                    <p>
                        Wenn Sie mehr über Cookies wissen möchten und technische Dokumentationen nicht scheuen,
                        empfehlen wir&nbsp;
                        <a href="https://datatracker.ietf.org/doc/html/rfc6265">
                            https://datatracker.ietf.org/doc/html/rfc6265
                        </a>
                        ,&nbsp;dem Request for Comments der Internet Engineering Task Force (IETF) namens “HTTP State
                        Management Mechanism”.
                    </p>

                    <p>
                        <strong>Zweck der Verarbeitung über Cookies</strong>
                    </p>

                    <p>
                        Der Zweck ist letztendlich abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter
                        unten bzw. beim Hersteller der Software, die das Cookie setzt.
                    </p>

                    <p>
                        <strong>Welche Daten werden verarbeitet?</strong>
                    </p>

                    <p>
                        Cookies sind kleine Gehilfen für eine viele verschiedene Aufgaben. Welche Daten in Cookies
                        gespeichert werden, kann man leider nicht verallgemeinern, aber wir werden Sie im Rahmen der
                        folgenden Datenschutzerklärung über die verarbeiteten bzw. gespeicherten Daten informieren.
                    </p>

                    <p>
                        <strong>Speicherdauer von Cookies</strong>
                    </p>

                    <p>
                        Die Speicherdauer hängt vom jeweiligen Cookie ab und wird weiter unter präzisiert. Manche
                        Cookies werden nach weniger als einer Stunde gelöscht, andere können mehrere Jahre auf einem
                        Computer gespeichert bleiben.
                    </p>

                    <p>
                        Sie haben außerdem selbst Einfluss auf die Speicherdauer. Sie können über ihren Browser
                        sämtliche Cookies jederzeit manuell löschen (siehe auch unten “Widerspruchsrecht”). Ferner
                        werden Cookies, die auf einer Einwilligung beruhen, spätestens nach Widerruf Ihrer Einwilligung
                        gelöscht, wobei die Rechtmäßigkeit der Speicherung bis dahin unberührt bleibt.
                    </p>

                    <p>
                        <strong>Widerspruchsrecht – wie kann ich Cookies löschen?</strong>
                    </p>

                    <p>
                        Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service
                        oder welcher Website die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, zu
                        deaktivieren oder nur teilweise zuzulassen. Zum Beispiel können Sie Cookies von Drittanbietern
                        blockieren, aber alle anderen Cookies zulassen.
                    </p>

                    <p>
                        Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie
                        Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen
                        finden:
                    </p>

                    <p>
                        <a
                            href="https://support.google.com/chrome/answer/95647?tid=111947866"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Chrome: Cookies in Chrome löschen, aktivieren und verwalten
                        </a>
                    </p>

                    <p>
                        <a
                            href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=111947866"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Safari: Verwalten von Cookies und Websitedaten mit Safari
                        </a>
                    </p>

                    <p>
                        <a
                            href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=111947866"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt
                            haben
                        </a>
                    </p>

                    <p>
                        <a href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d?tid=111947866">
                            Internet Explorer: Löschen und Verwalten von Cookies
                        </a>
                    </p>

                    <p>
                        <a href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-l%C3%B6schen-63947406-40ac-c3b8-57b9-2a946a29ae09?tid=111947866">
                            Microsoft Edge: Löschen und Verwalten von Cookies
                        </a>
                    </p>

                    <p>
                        Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass
                        er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen
                        Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser
                        verschieden. Am besten Sie suchen die Anleitung in Google mit dem Suchbegriff “Cookies löschen
                        Chrome” oder “Cookies deaktivieren Chrome” im Falle eines Chrome Browsers.
                    </p>

                    <p>
                        <strong>Rechtsgrundlage</strong>
                    </p>

                    <p>
                        Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das
                        Speichern von Cookies eine&nbsp;<strong>Einwilligung</strong>&nbsp;(Artikel 6 Abs. 1 lit. a
                        DSGVO) von Ihnen verlangt. Innerhalb der EU-Länder gibt es allerdings noch sehr unterschiedliche
                        Reaktionen auf diese Richtlinien. In Österreich erfolgte aber die Umsetzung dieser Richtlinie in
                        § 96 Abs. 3 des Telekommunikationsgesetzes (TKG). In Deutschland wurden die Cookie-Richtlinien
                        nicht als nationales Recht umgesetzt. Stattdessen erfolgte die Umsetzung dieser Richtlinie
                        weitgehend in § 15 Abs.3 des Telemediengesetzes (TMG).
                    </p>

                    <p>
                        Für unbedingt notwendige Cookies, auch soweit keine Einwilligung vorliegt. bestehen&nbsp;
                        <strong>berechtigte Interessen</strong>&nbsp;(Artikel 6 Abs. 1 lit. f DSGVO), die in den meisten
                        Fällen wirtschaftlicher Natur sind. Wir möchten den Besuchern der Website eine angenehme
                        Benutzererfahrung bescheren und dafür sind bestimmte Cookies oft unbedingt notwendig.
                    </p>

                    <p>
                        Soweit nicht unbedingt erforderliche Cookies zum Einsatz kommen, geschieht dies nur im Falle
                        Ihrer Einwilligung. Rechtsgrundlage ist insoweit Art. 6 Abs. 1 lit. a DSGVO.
                    </p>

                    <p>
                        In den folgenden Abschnitten werden Sie genauer über den Einsatz von Cookies informiert, sofern
                        eingesetzte Software Cookies verwendet.
                    </p>

                    <p>
                        <strong>Webhosting Einleitung</strong>
                    </p>

                    <figure className="wp-block-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Webhosting Zusammenfassung</strong>
                                        <br />
                                        Betroffene: Besucher der Website
                                        <br />
                                        Zweck: professionelles Hosting der Website und Absicherung des Betriebs
                                        <br />
                                        Verarbeitete Daten: IP-Adresse, Zeitpunkt des Websitebesuchs, verwendeter
                                        Browser und weitere Daten. Mehr Details dazu finden Sie weiter unten bzw. beim
                                        jeweils eingesetzten Webhosting Provider.
                                        <br />
                                        Speicherdauer: abhängig vom jeweiligen Provider, aber in der Regel 2 Wochen
                                        <br />
                                        &#x2696;&#xfe0f;&nbsp;Rechtsgrundlagen: Art. 6 Abs. 1 lit.f DSGVO (Berechtigte
                                        Interessen)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </figure>

                    <p>
                        <strong>Was ist Webhosting?</strong>
                    </p>

                    <p>
                        Wenn Sie heutzutage Websites besuchen, werden gewisse Informationen – auch personenbezogene
                        Daten – automatisch erstellt und gespeichert, so auch auf dieser Website. Diese Daten sollten
                        möglichst sparsam und nur mit Begründung verarbeitet werden. Mit Website meinen wir übrigens die
                        Gesamtheit aller Webseiten auf einer Domain, d.h. alles von der Startseite (Homepage) bis hin
                        zur aller letzten Unterseite (wie dieser hier). Mit Domain meinen wir zum Beispiel beispiel.de
                        oder musterbeispiel.com.
                    </p>

                    <p>
                        Wenn Sie eine Website auf einem Bildschirm ansehen möchten, verwenden Sie dafür ein Programm,
                        das sich Webbrowser nennt. Sie kennen vermutlich einige Webbrowser beim Namen: Google Chrome,
                        Microsoft Edge, Mozilla Firefox und Apple Safari.
                    </p>

                    <p>
                        Dieser Webbrowser muss sich zu einem anderen Computer verbinden, wo der Code der Website
                        gespeichert ist: dem Webserver. Der Betrieb eines Webservers ist eine komplizierte und
                        aufwendige Aufgabe, weswegen dies in der Regel von professionellen Anbietern, den Providern,
                        übernommen wird. Diese bieten Webhosting an und sorgen damit für eine verlässliche und
                        fehlerfreie Speicherung der Daten von Websites.
                    </p>

                    <p>
                        Bei der Verbindungsaufnahme des Browsers auf Ihrem Computer (Desktop, Laptop, Smartphone) und
                        während der Datenübertragung zu und vom Webserver kann es zu einer Verarbeitung
                        personenbezogener Daten kommen. Einerseits speichert Ihr Computer Daten, andererseits muss auch
                        der Webserver Daten eine Zeit lang speichern, um einen ordentlichen Betrieb zu gewährleisten.
                    </p>

                    <p>Zur Veranschaulichung:</p>

                    <p>
                        <strong>Warum verarbeiten wir personenbezogene Daten?</strong>
                    </p>

                    <p>Die Zwecke der Datenverarbeitung sind:</p>

                    <ol>
                        <li>Professionelles Hosting der Website und Absicherung des Betriebs</li>
                        <li>zur Aufrechterhaltung der Betriebs- und IT-Sicherheit</li>
                        <li>
                            Anonyme Auswertung des Zugriffsverhaltens zur Verbesserung unseres Angebots und ggf. zur
                            Strafverfolgung bzw. Verfolgung von Ansprüchen
                        </li>
                    </ol>

                    <p>
                        <strong>Welche Daten werden verarbeitet?</strong>
                    </p>

                    <p>
                        Auch während Sie unsere Website jetzt gerade besuchen, speichert unser Webserver, das ist der
                        Computer auf dem diese Webseite gespeichert ist, in der Regel automatisch Daten wie
                    </p>

                    <ul>
                        <li>die komplette Internetadresse (URL) der aufgerufenen Webseite</li>
                        <li>Browser und Browserversion (z. B. Chrome 87)</li>
                        <li>das verwendete Betriebssystem (z. B. Windows 10)</li>
                        <li>
                            die Adresse (URL) der zuvor besuchten Seite (Referrer URL) (z. B.&nbsp;
                            <a
                                href="https://www.beispielquellsite.de/vondabinichgekommen.html/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                https://www.beispielquellsite.de/vondabinichgekommen.html/
                            </a>
                            )
                        </li>
                        <li>
                            den Hostnamen und die IP-Adresse des Geräts von welchem aus zugegriffen wird (z. B.
                            COMPUTERNAME und 194.23.43.121)
                        </li>
                        <li>Datum und Uhrzeit</li>
                        <li>in Dateien, den sogenannten Webserver-Logfiles</li>
                    </ul>

                    <p>
                        <strong>Wie lange werden Daten gespeichert?</strong>
                    </p>

                    <p>
                        In der Regel werden die oben genannten Daten zwei Wochen gespeichert und danach automatisch
                        gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten
                        beim Vorliegen von rechtswidrigem Verhalten von Behörden eingesehen werden.
                    </p>

                    <p>
                        <strong>Kurz gesagt:</strong>&nbsp;Ihr Besuch wird durch unseren Provider (Firma, die unsere
                        Website auf speziellen Computern (Servern) laufen lässt), protokolliert, aber wir geben Ihre
                        Daten nicht ohne Zustimmung weiter!
                    </p>

                    <p>
                        <strong>Rechtsgrundlage</strong>
                    </p>

                    <p>
                        Die Rechtmäßigkeit der Verarbeitung personenbezogener Daten im Rahmen des Webhosting ergibt sich
                        aus Art. 6 Abs. 1 lit. f DSGVO (Wahrung der berechtigten Interessen), denn die Nutzung von
                        professionellem Hosting bei einem Provider ist notwendig, um das Unternehmen im Internet sicher
                        und nutzerfreundlich präsentieren und Angriffe und Forderungen hieraus gegebenenfalls verfolgen
                        zu können.
                    </p>

                    <p>
                        Zwischen uns und dem Hostingprovider besteht in der Regel ein Vertrag über die
                        Auftragsverarbeitung gemäß Art. 28 f. DSGVO, der die Einhaltung von Datenschutz gewährleistet
                        und Datensicherheit garantiert.
                    </p>

                    <p>
                        <strong>Audio &amp; Video Einleitung</strong>
                    </p>

                    <figure className="wp-block-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Audio &amp; Video Datenschutzerklärung Zusammenfassung</strong>
                                        <br />
                                        Betroffene: Besucher der Website
                                        <br />
                                        Zweck: Optimierung unserer Serviceleistung
                                        <br />
                                        Verarbeitete Daten: Daten wie etwa Kontaktdaten, Daten zum Nutzerverhalten,
                                        Informationen zu Ihrem Gerät und Ihre IP-Adresse können gespeichert werden.
                                        <br />
                                        Mehr Details dazu finden Sie weiter unten in den entsprechenden
                                        Datenschutztexten.
                                        <br />
                                        Speicherdauer: Daten bleiben grundsätzlich gespeichert, solange sie für den
                                        Dienstzweck nötig sind
                                        <br />
                                        &#x2696;&#xfe0f;&nbsp;Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO
                                        (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </figure>

                    <p>
                        <strong>Was sind Audio- und Videoelemente?</strong>
                    </p>

                    <p>
                        Wir haben auf unsere Website Audio- bzw. Videoelemente eingebunden, damit Sie sich direkt über
                        unsere Website etwa Videos ansehen oder Musik/Podcasts anhören können. Die Inhalte werden von
                        Dienstanbietern zur Verfügung gestellt. Alle Inhalte werden also auch von den entsprechenden
                        Servern der Anbieter bezogen.
                    </p>

                    <p>
                        Es handelt sich dabei um eingebundene Funktionselemente von Plattformen wie etwa YouTube, Vimeo
                        oder Spotify. Die Nutzung dieser Portale ist in der Regel kostenlos, es können aber auch
                        kostenpflichtige Inhalte veröffentlicht werden. Mit Hilfe dieser eingebundenen Elemente könne
                        Sie sich über unsere Website die jeweiligen Inhalte anhören oder ansehen.
                    </p>

                    <p>
                        Wenn Sie Audio- oder Videoelemente auf unsere Website verwenden, können auch personenbezogene
                        Daten von Ihnen an die Dienstanbieter übermittelt, verarbeitet und gespeichert werden.
                    </p>

                    <p>
                        <strong>Warum verwenden wir Audio- &amp; Videoelemente auf unserer Website?</strong>
                    </p>

                    <p>
                        Natürlich wollen wir Ihnen auf unserer Website das beste Angebot liefern. Und uns ist bewusst,
                        dass Inhalte nicht mehr bloß in Text und statischem Bild vermittelt werden. Statt Ihnen einfach
                        nur einen Link zu einem Video zu geben, bieten wir Ihnen direkt auf unserer Website Audio- und
                        Videoformate, die unterhaltend oder informativ und im Idealfall sogar beides sind. Das erweitert
                        unser Service und erleichtert Ihnen den Zugang zu interessanten Inhalten. Somit bieten wir neben
                        unseren Texten und Bildern auch Video und/oder Audio-Inhalte an.
                    </p>

                    <p>
                        <strong>Welche Daten werden durch Audio- &amp; Videoelemente gespeichert?</strong>
                    </p>

                    <p>
                        Wenn Sie eine Seite auf unserer Website aufrufen, die beispielsweise ein eingebettetes Video
                        hat, verbindet sich Ihr Server mit dem Server des Dienstanbieters. Dabei werden auch Daten von
                        Ihnen an den Drittanbieter übertragen und dort gespeichert. Manche Daten werden ganz unabhängig
                        davon, ob Sie bei dem Drittanbieter ein Konto haben oder nicht, gesammelt und gespeichert. Dazu
                        zählen meist Ihre IP-Adresse, Browsertyp, Betriebssystem, und weitere allgemeine Informationen
                        zu Ihrem Endgerät. Weiters werden von den meisten Anbietern auch Informationen über Ihre
                        Webaktivität eingeholt. Dazu zählen etwa Sitzungsdauer, Absprungrate, auf welchen Button Sie
                        geklickt haben oder über welche Website Sie den Dienst nutzen. All diese Informationen werden
                        meist über Cookies oder Pixel-Tags (auch Web Beacon genannt) gespeichert. Pseudonymisierte Daten
                        werden meist in Cookies in Ihrem Browser gespeichert. Welche Daten genau gespeichert und
                        verarbeitet werden, erfahren Sie stets in der Datenschutzerklärung des jeweiligen Anbieters.
                    </p>

                    <p>
                        <strong>Dauer der Datenverarbeitung</strong>
                    </p>

                    <p>
                        Wie lange die Daten auf den Servern der Drittanbieter genau gespeichert werden, erfahren Sie
                        entweder weiter unten im Datenschutztext des jeweiligen Tools oder in der Datenschutzerklärung
                        des Anbieters. Grundsätzlich werden personenbezogene Daten immer nur so lange verarbeitet, wie
                        es für die Bereitstellung unserer Dienstleistungen oder Produkte unbedingt nötig wird. Dies gilt
                        in der Regel auch für Drittanbieter. Meist können Sie davon ausgehen, dass gewisse Daten über
                        mehrere Jahre auf den Servern der Drittanbieter gespeichert werden. Daten können speziell in
                        Cookies unterschiedlich lange gespeichert werden. Manche Cookies werden bereits nach dem
                        Verlassen der Website wieder gelöscht, anderen können über einige Jahre in Ihrem Browser
                        gespeichert sein.
                    </p>

                    <p>
                        <strong>Widerspruchsrecht</strong>
                    </p>

                    <p>
                        Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von
                        Cookies bzw. Drittanbietern zu widerrufen. Das funktioniert entweder über unser
                        Cookie-Management-Tool oder über andere Opt-Out-Funktionen. Zum Bespiel können Sie auch die
                        Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die Cookies verwalten,
                        deaktivieren oder löschen. Die Rechtmäßigkeit der Verarbeitung bis zum Widerruf bleibt
                        unberührt.
                    </p>

                    <p>
                        Da durch die eingebundenen Audio- und Video-Funktionen auf unserer Seite meist auch Cookies
                        verwendet werden, sollte Sie sich auch unsere allgemeine Datenschutzerklärung über Cookies
                        durchlesen. In den Datenschutzerklärungen der jeweiligen Drittanbieter erfahren Sie genaueres
                        über den Umgang und die Speicherung Ihrer Daten.
                    </p>

                    <p>
                        <strong>Rechtsgrundlage</strong>
                    </p>

                    <p>
                        Wenn Sie eingewilligt haben, dass Daten von Ihnen durch eingebundene Audio- und Video-Elemente
                        verarbeitet und gespeichert werden können, gilt diese Einwilligung als Rechtsgrundlage der
                        Datenverarbeitung&nbsp;<strong>(Art. 6 Abs. 1 lit. a DSGVO)</strong>. Grundsätzlich werden Ihre
                        Daten auch auf Grundlage unseres berechtigten Interesses&nbsp;
                        <strong>(Art. 6 Abs. 1 lit. f DSGVO)</strong>&nbsp;an einer schnellen und guten Kommunikation
                        mit Ihnen oder anderen Kunden und Geschäftspartnern gespeichert und verarbeitet. Wir setzen die
                        eingebundenen Audio- und Video-Elemente gleichwohl nur ein, soweit Sie eine Einwilligung erteilt
                        haben.
                    </p>

                    <p>
                        <strong>Vimeo Datenschutzerklärung</strong>
                    </p>

                    <figure className="wp-block-table">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <strong>Vimeo Datenschutzerklärung Zusammenfassung</strong>
                                        <br />
                                        Betroffene: Besucher der Website
                                        <br />
                                        Zweck: Optimierung unserer Serviceleistung
                                        <br />
                                        Verarbeitete Daten: Daten wie etwa Kontaktdaten, Daten zum Nutzerverhalten,
                                        Informationen zu Ihrem Gerät und Ihre IP-Adresse können gespeichert werden.
                                        <br />
                                        Mehr Details dazu finden Sie weiter unten in dieser Datenschutzerklärung.
                                        <br />
                                        Speicherdauer: Daten bleiben grundsätzlich gespeichert, solange sie für den
                                        Dienstzweck nötig sind
                                        <br />
                                        &#x2696;&#xfe0f;&nbsp;Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO
                                        (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </figure>

                    <p>
                        <strong>Was ist Vimeo?</strong>
                    </p>

                    <p>
                        Wir verwenden auf unserer Website auch Videos der Firma Vimeo. Betrieben wird das Videoportal
                        durch Vimeo LLC, 555 West 18th Street, New York, New York 10011, USA. Mit Hilfe eines Plug-ins
                        können wir Ihnen so interessantes Videomaterial direkt auf unserer Website anzeigen. Dabei
                        können gewissen Daten von Ihnen an Vimeo übertragen werden. In dieser Datenschutzerklärung
                        zeigen wir Ihnen, um welche Daten es sich handelt, warum wir Vimeo verwenden und wie Sie Ihre
                        Daten bzw. die Datenübertragung verwalten oder unterbinden können.
                    </p>

                    <p>
                        Vimeo ist eine Videoplattform, die 2004 gegründet wurde und seit 2007 das Streamen von Videos in
                        HD-Qualität ermöglicht. Seit 2015 kann auch in 4k Ultra HD gestreamt werden. Die Nutzung des
                        Portals ist kostenlos, es kann allerdings auch kostenpflichtiger Content veröffentlicht werden.
                        Im Vergleich zum Marktführer YouTube, legt Vimeo vorrangig Wert auf hochwertigen Content in
                        guter Qualität. So bietet das Portal einerseits viele künstlerische Inhalte wie Musikvideos und
                        Kurzfilme, andererseits aber auch wissenswerte Dokumentationen zu den unterschiedlichsten
                        Themen.
                    </p>

                    <p>
                        <strong>Warum verwenden wir Vimeo auf unserer Website?</strong>
                    </p>

                    <p>
                        Ziel unserer Webpräsenz ist es, Ihnen den bestmöglichen Content zu liefern. Und zwar so einfach
                        zugänglich wie möglich. Erst wenn wir das geschafft haben, sind wir mit unserem Service
                        zufrieden. Der Videodienst Vimeo unterstützt uns dieses Ziel zu erreichen. Vimeo bietet uns die
                        Möglichkeit, Ihnen qualitativ hochwertige Inhalte direkt auf unserer Website zu präsentieren.
                        Statt Ihnen nur einen Link zu einem interessanten Video zu geben, können Sie so das Video gleich
                        bei uns ansehen. Das erweitert unser Service und erleichtert Ihnen den Zugang zu interessanten
                        Inhalten. Somit bieten wir neben unseren Texten und Bildern auch Video-Content an.
                    </p>

                    <p>
                        <strong>Welche Daten werden auf Vimeo gespeichert?</strong>
                    </p>

                    <p>
                        Wenn Sie auf unserer Website eine Seite aufrufen, die ein Vimeo-Video eingebettet hat, verbindet
                        sich Ihr Browser mit den Servern von Vimeo. Dabei kommt es zu einer Datenübertragung. Diese
                        Daten werden auf den Vimeo-Servern gesammelt, gespeichert und verarbeitet. Unabhängig davon, ob
                        Sie ein Vimeo-Konto haben oder nicht, sammelt Vimeo Daten über Sie. Dazu zählen Ihre IP-Adresse,
                        technische Infos über Ihren Browsertyp, Ihr Betriebssystem oder ganz grundlegende
                        Geräteinformationen. Weiters speichert Vimeo Informationen über welche Webseite Sie den
                        Vimeo-Dienst nutzen und welche Handlungen (Webaktivitäten) Sie auf unserer Webseite ausführen.
                        Zu diesen Webaktivitäten zählen beispielsweise Sitzungsdauer, Absprungrate oder auf welchen
                        Button Sie auf unserer Webseite mit eingebauter Vimeo-Funktion geklickt haben. Diese Handlungen
                        kann Vimeo mit Hilfe von Cookies und ähnlichen Technologien verfolgen und speichern.
                    </p>

                    <p>
                        Falls Sie als registriertes Mitglied bei Vimeo eingeloggt sind, können meistens mehr Daten
                        erhoben werden, da möglicherweise mehr Cookies bereits in Ihrem Browser gesetzt wurden. Zudem
                        werden Ihre Handlungen auf unsere Webseite direkt mit Ihrem Vimeo-Account verknüpft. Um dies zu
                        verhindern müssen Sie sich, während des “Surfens” auf unserer Webseite, von Vimeo ausloggen.
                    </p>

                    <p>
                        Nachfolgend zeigen wir Ihnen Cookies, die von Vimeo gesetzt werden, wenn Sie auf einer Webseite
                        mit integrierter Vimeo-Funktion, sind. Diese Liste erhebt keinen Anspruch auf Vollständigkeit
                        und geht davon aus, dass Sie keinen Vimeo-Account haben.
                    </p>

                    <p>
                        <strong>Name:</strong>&nbsp;player
                        <br />
                        <strong>Wert:</strong>&nbsp;“”
                        <br />
                        <strong>Verwendungszweck:</strong>&nbsp;Dieses Cookie speichert Ihre Einstellungen, bevor Sie
                        ein eingebettetes Vimeo-Video abspielen. Dadurch bekommen Sie beim nächsten Mal, wenn Sie ein
                        Vimeo-Video ansehen, wieder Ihre bevorzugten Einstellungen.
                        <br />
                        <strong>Ablaufdatum:</strong>&nbsp;nach einem Jahr
                    </p>

                    <p>
                        <strong>Name</strong>:&nbsp;vuid
                        <br />
                        <strong>Wert:&nbsp;</strong>pl1046149876.614422590111947866-4
                        <strong>
                            <br />
                            Verwendungszweck:&nbsp;&nbsp;
                        </strong>
                        Dieses Cookie sammelt Informationen über Ihre Handlungen auf Webseiten, die ein Vimeo-Video
                        eingebettet haben.
                        <strong>
                            <br />
                            Ablaufdatum:&nbsp;&nbsp;
                        </strong>
                        nach 2 Jahren
                    </p>

                    <p>
                        <strong>Anmerkung:</strong>&nbsp;Diese beiden Cookies werden immer gesetzt, sobald Sie sich auf
                        einer Webseite mit einem eingebetteten Vimeo-Video befinden. Wenn Sie das Video ansehen und auf
                        die Schaltfläche klicken, um beispielsweise das Video zu “teilen” oder zu “liken”, werden
                        weitere Cookies gesetzt. Dabei handelt es sich auch um Drittanbieter-Cookies wie&nbsp; _ga oder
                        _gat_UA-76641-8 von Google Analytics oder _fbp von Facebook. Welche Cookies hier genau gesetzt
                        werden, hängt von Ihrer Interaktion mit dem Video ab.
                    </p>

                    <p>
                        Die folgende Liste zeigt einen Ausschnitt möglicher Cookies, die gesetzt werden, wenn Sie mit
                        dem Vimeo-Video interagieren:
                    </p>

                    <p>
                        <strong>Name:</strong>&nbsp;_abexps
                        <br />
                        <strong>Wert:</strong>&nbsp;%5B%5D
                        <br />
                        <strong>Verwendungszweck:&nbsp;</strong>Dieses Vimeo-Cookie hilft Vimeo, sich an die von Ihnen
                        getroffenen Einstellungen zu erinnern. Dabei kann es sich zum Beispiel um eine voreingestellte
                        Sprache, um eine Region oder einen Benutzernamen handeln. Im Allgemeinen speichert das Cookie
                        Daten darüber, wie Sie Vimeo verwenden.
                        <br />
                        <strong>Ablaufdatum:</strong>&nbsp;nach einem Jahr
                    </p>

                    <p>
                        <strong>Name:</strong>&nbsp;continuous_play_v3
                        <br />
                        <strong>Wert:</strong>&nbsp;1
                        <br />
                        <strong>Verwendungszweck:&nbsp;</strong>Bei diesem Cookie handelt es sich um ein
                        Erstanbieter-Cookie von Vimeo. Das Cookie sammelt Informationen wie Sie das Vimeo-Service
                        verwenden. Beispielsweise speichert das Cookie, wann Sie ein Video pausieren bzw. wieder
                        abspielen.
                        <br />
                        <strong>Ablaufdatum:</strong>&nbsp;nach einem Jahr
                    </p>

                    <p>
                        <strong>Name:</strong>&nbsp;_ga
                        <br />
                        <strong>Wert:</strong>&nbsp;GA1.2.1522249635.1578401280111947866-7
                        <br />
                        <strong>Verwendungszweck:&nbsp;</strong>Dieses Cookie ist ein Drittanbieter-Cookie von Google.
                        Standardmäßig verwendet analytics.js das Cookie _ga, um die User-ID zu speichern. Grundsätzlich
                        dient es zur Unterscheidung der Websitebesucher.
                        <br />
                        <strong>Ablaufdatum:</strong>&nbsp;nach 2 Jahren
                    </p>

                    <p>
                        <strong>Name:</strong>&nbsp;_gcl_au
                        <br />
                        <strong>Wert:</strong>&nbsp;1.1.770887836.1578401279111947866-3
                        <br />
                        <strong>Verwendungszweck:&nbsp;</strong>Dieses Drittanbieter-Cookie von Google AdSense wird
                        verwendet, um die Effizienz von Werbeanzeigen auf Websites zu verbessern.
                        <br />
                        <strong>Ablaufdatum:</strong>&nbsp;nach 3 Monaten
                    </p>

                    <p>
                        <strong>Name:</strong>&nbsp;_fbp
                        <br />
                        <strong>Wert:</strong>&nbsp;fb.1.1578401280585.310434968
                        <br />
                        <strong>Verwendungszweck:</strong>&nbsp;Das ist ein Facebook-Cookie. Dieses Cookie wird
                        verwendet, um Werbeanzeigen bzw. Werbeprodukte von Facebook oder anderen Werbetreibenden
                        einzublenden.
                        <br />
                        <strong>Ablaufdatum:</strong>&nbsp;nach 3 Monaten
                    </p>

                    <p>
                        Vimeo nutzt diese Daten unter anderem, um das eigene Service zu verbessern, um mit Ihnen in
                        Kommunikation zu treten und um eigene zielgerichtete Werbemaßnahmen zu setzen. Vimeo betont auf
                        seiner Website, dass bei eingebetteten Videos nur Erstanbieter-Cookies (also Cookies von Vimeo
                        selbst) verwendet werden, solange man mit dem Video nicht interagiert.
                    </p>

                    <p>
                        <strong>Wie lange und wo werden die Daten gespeichert?</strong>
                    </p>

                    <p>
                        Vimeo hat den Hauptsitz in White Plains im Bundesstaat New York (USA). Die Dienste werden aber
                        weltweit angeboten. Dabei verwendet das Unternehmen Computersysteme, Datenbanken und Server in
                        den USA und auch in anderen Ländern. Ihre Daten können somit auch auf Servern in Amerika
                        gespeichert und verarbeitet werden. Die Daten bleiben bei Vimeo so lange gespeichert, bis das
                        Unternehmen keinen wirtschaftlichen Grund mehr für die Speicherung hat. Dann werden die Daten
                        gelöscht oder anonymisiert.
                    </p>

                    <p>
                        <strong>Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</strong>
                    </p>

                    <p>
                        Sie haben immer die Möglichkeit, Cookies in Ihrem Browser nach Ihren Wünschen zu verwalten. Wenn
                        Sie beispielsweise nicht wollen, dass Vimeo Cookies setzt und so Informationen über Sie sammelt,
                        können Sie in Ihren Browser-Einstellungen Cookies jederzeit löschen oder deaktivieren. Je nach
                        Browser funktioniert dies ein bisschen anders. Bitte beachten Sie, dass möglicherweise nach dem
                        Deaktivieren/Löschen von Cookies diverse Funktionen nicht mehr im vollen Ausmaß zur Verfügung
                        stehen. Unter dem Abschnitt „Cookies“ finden Sie die entsprechenden Links zu den jeweiligen
                        Anleitungen der bekanntesten Browser.
                    </p>

                    <p>
                        Falls Sie ein registriertes Vimeo-Mitglied sind, können Sie auch in den Einstellungen bei Vimeo
                        die verwendeten Cookies verwalten.
                    </p>

                    <p>
                        <strong>Rechtsgrundlage</strong>
                    </p>

                    <p>
                        Wenn Sie eingewilligt haben, dass Daten von Ihnen durch eingebundene Vimeo-Elemente verarbeitet
                        und gespeichert werden können, gilt diese Einwilligung als Rechtsgrundlage der
                        Datenverarbeitung&nbsp;<strong>(Art. 6 Abs. 1 lit. a DSGVO)</strong>. Grundsätzlich werden Ihre
                        Daten auch auf Grundlage unseres berechtigten Interesses&nbsp;
                        <strong>(Art. 6 Abs. 1 lit. f DSGVO)</strong>&nbsp;an einer schnellen und guten Kommunikation
                        mit Ihnen oder anderen Kunden und Geschäftspartnern gespeichert und verarbeitet. Wir setzen die
                        eingebundenen Vimeo-Elemente gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben.
                        Vimeo setzt auch Cookies in Ihrem Browser, um Daten zu speichern. Darum empfehlen wir Ihnen,
                        unseren Datenschutztext über Cookies genau durchzulesen und die Datenschutzerklärung oder die
                        Cookie-Richtlinien des jeweiligen Dienstanbieters anzusehen.
                    </p>

                    <p>
                        Vimeo verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen darauf hin, dass nach Meinung
                        des Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in
                        die USA besteht. Dies kann mit verschiedenen Risiken für die Rechtmäßigkeit und Sicherheit der
                        Datenverarbeitung einhergehen.
                    </p>

                    <p>
                        Als Grundlage der Datenverarbeitung bei Empfängern mit Sitz in Drittstaaten (außerhalb der
                        Europäischen Union, Island, Liechtenstein, Norwegen, also insbesondere in den USA) oder einer
                        Datenweitergabe dorthin verwendet Vimeo sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2
                        und 3 DSGVO). Standardvertragsklauseln (Standard Contractual Clauses – SCC) sind von der
                        EU-Kommission bereitgestellte Mustervorlagen und sollen sicherstellen, dass Ihre Daten auch dann
                        den europäischen Datenschutzstandards entsprechen, wenn diese in Drittländer (wie beispielsweise
                        in die USA) überliefert und dort gespeichert werden. Durch diese Klauseln verpflichtet sich
                        Vimeo, bei der Verarbeitung Ihrer relevanten Daten, das europäische Datenschutzniveau
                        einzuhalten, selbst wenn die Daten in den USA gespeichert, verarbeitet und verwaltet werden.
                        Diese Klauseln basieren auf einem Durchführungsbeschluss der EU-Kommission. Sie finden den
                        Beschluss und die entsprechenden Standardvertragsklauseln u.a. hier:&nbsp;
                        <a
                            href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de
                        </a>
                    </p>

                    <p>
                        Mehr Informationen zu den Standardvertragsklauseln bei Vimeo finden Sie unter&nbsp;
                        <a
                            href="https://vimeo.com/privacy#international_data_transfers_and_certain_user_rights"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            https://vimeo.com/privacy#international_data_transfers_and_certain_user_rights
                        </a>
                        .
                    </p>

                    <p>
                        Mehr über den Einsatz von Cookies bei Vimeo erfahren Sie auf&nbsp;
                        <a
                            href="https://vimeo.com/cookie_policy?tid=111947866"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            https://vimeo.com/cookie_policy
                        </a>
                        , Informationen zum Datenschutz bei Vimeo können Sie auf&nbsp;
                        <a href="https://vimeo.com/privacy?tid=111947866" target="_blank" rel="noreferrer noopener">
                            https://vimeo.com/privacy
                        </a>
                        &nbsp;nachlesen.
                    </p>

                    <p>Alle Texte sind urheberrechtlich geschützt.</p>

                    <p>
                        Quelle: Erstellt mit dem&nbsp;
                        <a href="https://www.adsimple.at/datenschutz-generator/">Datenschutz Generator</a>&nbsp;von
                        AdSimple
                    </p>
                </div>
            </div>
        </MainContainer>
    );
}

export const getStaticProps = async (context) => {
    const resStart = await client.fetch(`*[_type in ["about"]]`);
    const dataStart = await resStart[0];

    return {
        props: {
            dataStart,
        },
    };
};
