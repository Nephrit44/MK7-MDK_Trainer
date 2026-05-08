const elementForChekList = document.querySelector('.cheklistCollection');
const elementCardQestion = document.querySelector('.cardQestions');

const getTemplateCard = document.querySelector('#card');
const getTemplateQestions = document.querySelector('#qestions');

const btnChek = document.querySelector('.btnChek');

cardCollection.forEach((element) => {
    let newElement = getTemplateCard.content.cloneNode(true); //Клонируем
    newElement.querySelector('.cheklist__item').setAttribute('cardid', element.card);
    newElement.querySelector('.cheklist__item').textContent = element.cardTitle; //Название карточки
    elementForChekList.append(newElement);
});

document.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('cheklist__item')) {
        elementForChekList.classList.add('visible');
        loadChekList(evt.target.getAttribute('cardid'), dbQestions, elementCardQestion);
    }
})


//Функция перемешивания ответов
function randomizer(elementForRandomize) {

    for (let i = elementForRandomize.children.length; i >= 0; i--) {
        elementForRandomize.appendChild(elementForRandomize.children[Math.random() * i | 0]);
    }
}

randomizer(elementForChekList);

function loadChekList(cardid, dataBase) {
    dataBase.forEach((element) => {
        if (element.cardID == cardid) {
            let newElement = qestions.content.cloneNode(true); //Клонируем
            newElement.querySelector('.qestions__item').setAttribute('cardid', element.cardID);
            newElement.querySelector('.qestions__item').setAttribute('cardOrder', element.cardOrder);
            newElement.querySelector('.qestions__item').textContent = element.cardQestion;
            elementCardQestion.append(newElement);
        }
    })
    randomizer(elementCardQestion);
    dragDrop();
}

btnChek.addEventListener('click', function () {
    getAnswer();
})

function getAnswer() {
    let i = 1;
    const answerList = elementCardQestion.querySelectorAll('li');
    answerList.forEach((element) => {
        if (element.getAttribute('cardorder') == i) {
            element.classList.add("succes");
        } else {
            element.classList.add("falure");
        }
        i++;
    })

}

function dragDrop() {
    const list = document.getElementById('draggableList');
    const items = list.querySelectorAll('.qestions__item');

    items.forEach(item => {
        item.setAttribute('draggable', 'true');

        item.addEventListener('dragstart', function (e) {
            e.dataTransfer.setData('text/plain', e.target.innerText);
            e.target.classList.add('dragging');
        });

        item.addEventListener('dragend', function () {
            this.classList.remove('dragging');
        });

        item.addEventListener('dragover', function (e) {
            e.preventDefault();
            const draggingItem = document.querySelector('.dragging');
            const targetItem = this;

            if (draggingItem !== targetItem) {
                const rect = targetItem.getBoundingClientRect();
                const offsetY = (e.clientY - rect.top) / rect.height;

                if (offsetY < 0.5) {
                    list.insertBefore(draggingItem, targetItem);
                } else {
                    list.insertBefore(draggingItem, targetItem.nextSibling);
                }
            }
        });

        item.addEventListener('drop', function (e) {
            e.preventDefault();
        });
    });
};
