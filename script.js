
document.getElementById('addSkillBtn').addEventListener('click', () => {
    const skillInput = document.getElementById('skillInput');
    const skillValue = skillInput.value.trim();
    
    if (skillValue) {
      // Create skill element
      const skillElement = document.createElement('div');
      skillElement.classList.add('skill');
      
      const skillText = document.createElement('span');
      skillText.textContent = skillValue;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'x';
      deleteButton.addEventListener('click', () => {
        skillElement.remove();
      });
  
      skillElement.appendChild(skillText);
      skillElement.appendChild(deleteButton);
  
      document.getElementById('skillsList').appendChild(skillElement);
      skillInput.value = '';
    }
  });
  