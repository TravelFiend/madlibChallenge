const fill = () => {
    const nameInput = document.getElementById('name-input').value;
    const verb1Input = document.getElementById('verb-1-input').value;
    const noun1Input = document.getElementById('noun-1-input').value;
    const verb2Input = document.getElementById('verb-2-input').value;
    const noun2Input = document.getElementById('noun-2-input').value;
    const verb3Input = document.getElementById('verb-3-input').value;
    const adjective1Input = document.getElementById('adjective-1-input').value;
    const noun3Input = document.getElementById('noun-3-input').value;
    const adjective2Input = document.getElementById('adjective-2-input').value;
    const verb4Input = document.getElementById('verb-4-input').value;
    const noun4Input = document.getElementById('noun-4-input').value;

    const nameSpan = document.getElementById('name');
    nameSpan.textContent = nameInput;
    const verb1Span = document.getElementById('verb-1');
    verb1Span.textContent = verb1Input;
    const noun1Span = document.getElementById('noun-1');
    noun1Span.textContent = noun1Input;
    const verb2Span = document.getElementById('verb-2');
    verb2Span.textContent = verb2Input;
    const noun2Span = document.getElementById('noun-2');
    noun2Span.textContent = noun2Input;
    const verb3Span = document.getElementById('verb-3');
    verb3Span.textContent = verb3Input;
    const adjective1Span = document.getElementById('adjective-1');
    adjective1Span.textContent = adjective1Input;
    const noun3Span = document.getElementById('noun-3');
    noun3Span.textContent = noun3Input;
    const adjective2Span = document.getElementById('adjective-2');
    adjective2Span.textContent = adjective2Input;
    const verb4Span = document.getElementById('verb-3');
    verb4Span.textContent = verb4Input;
    const noun4Span = document.getElementById('noun-4');
    noun4Span.textContent = noun4Input;
}