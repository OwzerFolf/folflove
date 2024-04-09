<script>
	import '../app.css';
</script>

<header
	class="fixed w-screen flex items-center z-50
	justify-between p-2 top-0"
>
	<div class="flex rounded-full justify-center sm:justify-between w-full items-center p-4
	 bg-zinc-50/80 shadow-md dark:bg-zinc-900/60 backdrop-blur-lg">
		<h1 class="sm:block text-2xl hidden font-semibold sm:visible">Folf.love</h1>
		<div
			class="min-h-8 w-full
	flex justify-center bg-neutral-50/50 item-center rounded-3xl dark:bg-neutral-900/50 shadow-md
	transition-all ease-bounce px-2 sm:w-56 duration-300 h-8 focus-within:h-12 sm:focus-within:w-1/3"
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

		<div class="sm:flex hidden gap-4 items-center">
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
<div class="pt-20 px-4 bg-[url(/dammyhug.png)] overflow-hidden bg-cover">
	<slot />
</div>