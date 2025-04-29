
function showQuiz() {
    document.getElementById('quizForm').style.display = 'block';
  }
  
  function goToQuiz(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    localStorage.setItem('username', name);
    window.location.href = "quiz.html";
  }
  
  function submitQuiz(event) {
    event.preventDefault();
  
    const answers = {
      q1: 'a',
      q2: 'b',
      q3: 'c',
      q4: 'b',
      q5: 'c',
      q6: 'a',
      q7: 'a',
      q8: 'c',
      q9: 'a',
      q10: 'b'
    };
  
    let correct = 0;
    const total = Object.keys(answers).length;
  
    for (let q in answers) {
      const selected = document.querySelector(`input[name="${q}"]:checked`);
      if (selected && selected.value === answers[q]) {
        correct++;
      }
    }
  
    const wrong = total - correct;
  
    
    localStorage.setItem('correct', correct);
    localStorage.setItem('wrong', wrong);
  
    
    window.location.href = 'result.html';
  }
  