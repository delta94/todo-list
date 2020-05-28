const uiController = (() => {
	//  CODE FOR THE UI
	const DOMStrings = {
		// For querySelector
		addListBtn: '.add__list__btn',
		addListTitle: '.add__list__title',
		list: '.list',
		containerTodoTitle: '.container__todo__title',
		listItem: '.list__item',
		todo: '.todo',
		addTodoBtn: '.add__todo__btn',
		addTodoTitle: '.add__todo__title',
		// For element creation
		listItemClass: 'list__item',
		listItemTitleClass: 'list__item__title',
		listItemDeleteBtnClass: 'list__item__delete__btn'
	};
	// ===== PUBLIC =====
	const getListInput = () => {
		const listTitle = document.querySelector(DOMStrings.addListTitle).value;
		return listTitle;
	};
	const getTodoInput = () => {
		const todoTitle = document.querySelector(DOMStrings.addTodoTitle).value;
		return todoTitle;
	};
	const getDOMStrings = () => {
		return DOMStrings;
	};

	const addListItem = function(obj) {
		// create list item
		const listItemDiv = document.createElement('div');
		const titleDiv = document.createElement('div');
		const trashIcon = document.createElement('i');
		const deleteBtn = document.createElement('button');
		listItemDiv.classList.add(DOMStrings.listItemClass);
		listItemDiv.setAttribute('id', `list-${obj.id}`);
		titleDiv.classList.add(DOMStrings.listItemTitleClass);
		titleDiv.innerText = obj.title;
		trashIcon.classList.add('fas', 'fa-trash-alt');
		deleteBtn.classList.add(DOMStrings.listItemDeleteBtnClass);
		deleteBtn.append(trashIcon);
		listItemDiv.append(titleDiv, deleteBtn);

		// Append list item to lists
		const list = document.querySelector(DOMStrings.list);
		list.append(listItemDiv);
	};
	const deleteListItem = (selectorID) => {
		const el = document.getElementById(selectorID);
		el.parentNode.removeChild(el);
	};

	const clearListField = () => {
		const listTitle = document.querySelector(DOMStrings.addListTitle);
		listTitle.value = '';
		listTitle.focus();
	};

	const setupTodos = (obj) => {
		// 1. Set title for '.container__todo__title' with title from targetList.title
		const containerTodoTitle = document.querySelector(DOMStrings.containerTodoTitle);
		containerTodoTitle.innerText = obj.title;

		// 2. Remove 'selected' class from all '.list_item'
		const listItems = document.querySelectorAll(DOMStrings.listItem);
		listItems.forEach((item) => {
			item.classList.remove('selected');
		});

		// 3. Add 'selected' class to event.target
		const targetListItem = document.getElementById(`list-${obj.id}`);
		targetListItem.classList.add('selected');

		// 5. Update/Add todo-list-ID in '.todo'
		const todoCont = document.querySelector(DOMStrings.todo);
		todoCont.id = `todo-list-${obj.id}`;
	};

	return { getDOMStrings, getListInput, addListItem, deleteListItem, clearListField, setupTodos, getTodoInput };
})();
export default uiController;
