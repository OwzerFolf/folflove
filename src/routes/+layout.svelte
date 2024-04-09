<script>
	import '../app.css';
</script>

<header
	class="sticky flex items-center z-50
	justify-between p-2 top-0 min-h-16"
>
	<div class="flex rounded-full justify-between w-full items-center p-4
	 bg-zinc-50/80 shadow-md dark:bg-zinc-900/80 backdrop-blur-lg">
		<h1 class="text-2xl font-semibold">Folf.love</h1>
		<div
			class="min-h-8
	flex justify-center bg-neutral-50/50 item-center rounded-3xl dark:bg-neutral-900/50 shadow-md
	transition-all ease-bounce px-2 w-56 duration-300 h-8 focus-within:h-12 focus-within:w-1/3"
		>
			<div class="flex flex-row w-full justify-center items-center">
				<input
					type="text"
					class="bg-transparent w-full outline-none resize-none no-scrollbar"
					placeholder="Search..."
				/>
				<button
					class="flex items-center dark:text-neutral-50 drop-shadow-md
hover:text-blue-500 transition-all duration-500"
				>
					<span class="material-symbols-outlined"> search </span>
				</button>
			</div>
		</div>

		<div class="flex gap-4 items-center">
			<nav>
				<li class="list-none flex gap-5">
					<ul><a href="/about">About</a></ul>
				</li>
			</nav>
			<button
				class="hover:shadow-glow bg-blue-200 dark:bg-blue-500 hover:shadow-blue-600/50
		 px-4 py-1 rounded-full duration-500 transition-all">Folf</button
			>
		</div>
	</div>
</header>
<slot />
