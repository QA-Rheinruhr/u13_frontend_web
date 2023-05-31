# UML - Aktivitätsdiagramm Cheatsheet

## Definition
### Allgemein
Ein Aktivitätsdiagramm ist ein UML-Diagramm, das den Ablauf eines Prozesses, einer Aktivität oder eines Workflows grafisch darstellt. Es zeigt die Reihenfolge von Aktivitäten, Entscheidungen, parallelen Abläufen und Verzweigungen anhand von Symbolen und Verbindungen.

## Was muss ich wissen, um IHK-Aufgaben zu lösen?
- Grundlegende Symbole und deren Bedeutung
- Verwendung von Aktionen, Entscheidungen und Schleifen
- Verwendung von Verzweigungen und Parallelität
- Sequenzen und Kontrollflüsse im Diagramm
- Validierung und Überprüfung des Diagramms auf logische Korrektheit

## Beispiel-Diagramm
![Beispiel-Aktivitätsdiagramm](https://ceonaires.com/ceodocs/uploads/2018/07/UML_Aktivit%C3%A4tsdiagramm-1030x1006.png)

## IHK-Beispiel
### Aufgabe
Gegeben ist ein Aktivitätsdiagramm eines Online-Bestellprozesses. Analysiere das Diagramm und identifiziere die einzelnen Schritte und Entscheidungen.

### Legende (Markierungen)
- Aktion: Rechteck mit abgerundeten Ecken
- Entscheidung: Rhombus
- Verbindungspfeile: Sequenz der Aktionen
- Verzweigung: Parallele Pfeile

## Musterlösung
Die Analyse des Diagramms ergibt folgende Schritte und Entscheidungen:

1) Benutzer gibt Bestellung auf
2) System prüft Verfügbarkeit der Artikel
3) Entscheidung: Sind alle Artikel verfügbar?
   a) Ja: Bestellung wird fortgesetzt
   b) Nein: Bestellung wird abgebrochen
4) System erfasst Kundendaten
5) System berechnet Gesamtbetrag
6) Entscheidung: Ist Gesamtbetrag über 100 Euro?
   a) Ja: Versand ist kostenlos
   b) Nein: Versandkosten werden berechnet
7) Benutzer gibt Zahlungsinformationen ein
8) System bestätigt Bestellung

## Vorgehensweise (Wie habe ich die Aufgabe gelöst)
1) Betrachtung des Aktivitätsdiagramms
2) Identifikation der verschiedenen Symbole und deren Bedeutung
   a) Rechtecke repräsentieren Aktionen
   b) Rhomben repräsentieren Entscheidungen
   c) Pfeile repräsentieren die Reihenfolge der Aktion
