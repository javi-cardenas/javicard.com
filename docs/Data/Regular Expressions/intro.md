# Intro
Theory: Brief intro where regex came from

Practice: Basics needed to get started with regex!

Demo: Live editor to practice regex

# Theory of Regular Expressions
Regex in theoretical computer science is a formal expression that defines a *search pattern* and is used to *match (or recognize)* strings

## Look into math symbols and spell checks and standardized lower/upper case
Formal definition:
- Base elements:
    - empty set, empty string, and alphabet of characters
- Given regular expressions R and S, the following are also regular expressions:
    - R | S alternation (matches either R or S)
    - RS concatenation
    - R* Kleene star (matches 0 or more occurrences of R)
    - (R) parenthesis (can be ommited with precendece rules)

# Practice of Regular Expression
- Character set [...] matches any single character
- Optional element... ? matches 0 or 1 occurrence
- Range [0-9] matches any single character in this range
- (Kleene) Star * matches 0 or more occurrences
- Dot . matches any character (except line breaks)
- Escape character \ takes the next character literally like \\.
- Capturing group (...) groups multiple tokens; capture group for backreference
- \+ must have at least 1

## Character Classes
- . matches any character except newline
- \w, \d, \s match a word, digit, whitespace character, respectively
- \W, \D, \S match a non-word, non-digit, non-whitespace character, respectively
- [abc] any of a, b, or c
- [^abc] match a character other than a, b, or c
- [a-g] match a character between a, b, ..., g

## Anchors
- • ^abc match abc at the start of the string
- abc$ match abc at the end of the string
- xyz\b match xyz at a word boundary
- xyz\B match xyz if not at a word boundary

## Escaped Characters
- \. \* \\ escaped special characters
- \t \n \r match a tab, linefeed, carriage return
- \u00A9 unicode escaped ©

## Groups
- ([0-9]+)\s*([a-z]+) two capture group s
- \1 backreference to group #1
- \2 \1 first group #2, then #1 (simple palindrome)
- groups and backreferences often used for transformations
    - (\d{2})/(d{2})/(d{4}) three capture groups for MM/DD/YYYY
    - $3-$1-$2 insert captured results as: YYYY-MM-DD

## Beware of False Negatives and False Positives

### False Negative
- your pattern does not match … although it should!
- you will notice this problem first (missing match results)
- Remedy: you need to “relax” the regex, so it matches the desired strings

### False Positive
- your pattern does match … although it shouldn’t!
- you might not notice this at first (false matches may occur sporadically)
- Remedy: you need to “tighten” the regex, so it matches fewer strings (avoiding the false matches)

## RegEx for Syntax; Code for Semantics
- Getting “the right” regex can be quite a balancing act
- Even if there is a (near) exact regex solution, it might be really difficult to get right, debug, maintain, etc.
- Better: allow some false positives, then use code to check the semantics; usually much better in practice
    - keep regex for what they’re best: syntactic patterns
    - use some code to check the semantics of the match

Example: 02/29/2000. Is that a valid (even if non-standard) date?

```bash
if (year is not divisible by 4) then (it is a common year)
else if (year is not divisible by 100) then (it is a leap year)
else if (year is not divisible by 400) then (it is a common year)
else (it is a leap year)
```

# Regex Demo
[www.regexr.com](https://www.regexr.com)
