document.addEventListener('DOMContentLoaded', () => {
    // Keywords and their corresponding Wikipedia URLs
    const keywords = {
        // Lesson 1 Keywords
        'Fractions': 'https://en.wikipedia.org/wiki/Fraction_(mathematics)',
        'Numerator': 'https://en.wikipedia.org/wiki/Numerator',
        'Denominator': 'https://en.wikipedia.org/wiki/Denominator',
        'Common Denominator': 'https://en.wikipedia.org/wiki/Common_denominator',
        'Least Common Denominator': 'https://en.wikipedia.org/wiki/Least_common_denominator',
        'Equivalent Fractions': 'https://en.wikipedia.org/wiki/Equivalent_fractions',
        'Simplify': 'https://en.wikipedia.org/wiki/Irreducible_fraction',
        'Mixed Numbers': 'https://en.wikipedia.org/wiki/Mixed_number',
        'Improper Fractions': 'https://en.wikipedia.org/wiki/Improper_fraction',
        // Lesson 2 Keywords
        'Multiply': 'https://en.wikipedia.org/wiki/Multiplication',
        'Proper Fractions': 'https://en.wikipedia.org/wiki/Proper_fraction',
        'Reciprocal': 'https://en.wikipedia.org/wiki/Multiplicative_inverse',
        'Cross-Canceling': 'https://www.mathsisfun.com/canceling-fractions.html',
        // Lesson 3 Keywords
        'Decimals': 'https://en.wikipedia.org/wiki/Decimal',
        'Place Value': 'https://en.wikipedia.org/wiki/Place_value',
        'Tenths': 'https://en.wikipedia.org/wiki/Decimal#Decimal_fractions',
        'Hundredths': 'https://en.wikipedia.org/wiki/Decimal#Decimal_fractions',
        'Thousandths': 'https://en.wikipedia.org/wiki/Decimal#Decimal_fractions',
        'Decimal Point': 'https://en.wikipedia.org/wiki/Decimal_separator',
        // Lesson 4 Keywords
        'Geometry': 'https://en.wikipedia.org/wiki/Geometry',
        'Perimeter': 'https://en.wikipedia.org/wiki/Perimeter',
        'Area': 'https://en.wikipedia.org/wiki/Area',
        'Rectangle': 'https://en.wikipedia.org/wiki/Rectangle',
        'Square': 'https://en.wikipedia.org/wiki/Square',
        'Triangle': 'https://en.wikipedia.org/wiki/Triangle',
        'Formula': 'https://en.wikipedia.org/wiki/Formula',
        'Length': 'https://en.wikipedia.org/wiki/Length',
        'Width': 'https://en.wikipedia.org/wiki/Width',
        'Base': 'https://en.wikipedia.org/wiki/Base_(geometry)',
        'Height': 'https://en.wikipedia.org/wiki/Height',
        'Units of Measurement': 'https://en.wikipedia.org/wiki/Unit_of_measurement'
    };

    // Function to escape special characters in keywords for regex
    function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Combine keywords into a regex pattern
    const keywordPattern = new RegExp('\\b(' + Object.keys(keywords).map(escapeRegex).join('|') + ')\\b', 'gi');

    // Function to wrap keywords with a span for interactivity
    function wrapKeywords(node) {
        if (node.nodeType === 3) { // Text node
            const parent = node.parentNode;
            if (parent && parent.tagName !== 'SCRIPT' && parent.tagName !== 'STYLE' && !parent.classList.contains('interactive-keyword')) {
                const text = node.textContent;
                const replacedText = text.replace(keywordPattern, (match) => {
                    return `<span class="interactive-keyword" data-keyword="${match}">${match}</span>`;
                });
                if (replacedText !== text) {
                    const fragment = document.createRange().createContextualFragment(replacedText);
                    parent.replaceChild(fragment, node);
                }
            }
        } else if (node.nodeType === 1 && node.childNodes && !['SCRIPT', 'STYLE'].includes(node.tagName)) {
            node.childNodes.forEach(wrapKeywords);
        }
    }

    // Start wrapping from the main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        wrapKeywords(mainContent);
    }

    // Add event listeners for hover effect
    document.querySelectorAll('.interactive-keyword').forEach((element) => {
        const keyword = element.getAttribute('data-keyword');
        const url = keywords[keyword];

        element.style.cursor = 'pointer';

        element.addEventListener('click', () => {
            window.open(url, '_blank');
        });

        element.addEventListener('mouseover', () => {
            element.classList.add('keyword-hover');
        });

        element.addEventListener('mouseout', () => {
            element.classList.remove('keyword-hover');
        });
    });
});
