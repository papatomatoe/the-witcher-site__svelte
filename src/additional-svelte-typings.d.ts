declare namespace svelteHTML {
	interface HTMLAttributes<T> {
		onemblaInit?: (event: CustomEvent<MouseEvent<ItemType>> & { target: EventTarget & T }) => void;

		onaccept?: (event: CustomEvent<KeyboardEvent<ItemType>> & { target: EventTarget & T }) => void;

		oncomplete?: (
			event: CustomEvent<KeyboardEvent<ItemType>> & { target: EventTarget & T }
		) => void;
	}
}
