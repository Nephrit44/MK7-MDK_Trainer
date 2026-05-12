const elementForChekList = document.querySelector('.cheklistCollection');
const elementCardQestion = document.querySelector('.cardQestions');

const getTemplateCard = document.querySelector('#card');
const getTemplateQestions = document.querySelector('#qestions');

const btnChek = document.querySelector('.btnChek');
const chekTitle = document.querySelector('.cheklist-title');
const elemHeader = document.querySelector('.header');

cardCollection.forEach((element) => {
    let newElement = getTemplateCard.content.cloneNode(true); //Клонируем
    newElement.querySelector('.card-body').setAttribute('cardid', element.card);
    newElement.querySelector('.card-header').setAttribute('cardid', element.card);
    newElement.querySelector('.card-text').setAttribute('cardid', element.card);
    newElement.querySelector('.card-header').textContent = `Чек-лист: ${element.card}`;
    newElement.querySelector('.card-text').textContent = element.cardTitle;
    elementForChekList.append(newElement);
});

document.addEventListener('click', function (evt) {
    console.log(evt.target)
    if (evt.target.classList.contains('card-body') || evt.target.classList.contains('card-header') || evt.target.classList.contains('card-text')) {
        elementForChekList.classList.add('visible');
        loadChekList(evt.target.getAttribute('cardid'), dbQestions, evt.target.textContent);
    }
})


//Функция перемешивания ответов
function randomizer(elementForRandomize) {

    for (let i = elementForRandomize.children.length; i >= 0; i--) {
        elementForRandomize.appendChild(elementForRandomize.children[Math.random() * i | 0]);
    }
}

randomizer(elementForChekList);

function loadChekList(cardid, dataBase, cheklistTitle) {
    chekTitle.textContent = cheklistTitle;
    chekTitle.classList.remove('visible');
    elemHeader.classList.remove('visible');
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
    btnChek.classList.remove('visible')
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
    btnChek.classList.add('visible')
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

