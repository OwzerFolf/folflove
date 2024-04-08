<script>
	import '../app.css';
</script>

<header
	class="min-w-full sticky flex items-center z-50
	justify-between gap-4 p-4 top-0 min-h-16 bg-zinc-50 shadow-lg dark:bg-zinc-900"
>
	<h1 class="min-w-36 text-2xl font-semibold">Folf.love</h1>
	<div
		class="min-w-60 hover:shadow-glow hover:shadow-slate-50/10
	 border flex justify-center item-center rounded-3xl
	min-h-8 hover:min-w-64 transition-all px-2 duration-500"
	>
		<div class="flex w-full flex-col">
			<div class="w-full h-1"></div>
			<textarea
				class="focus:m-2 w-11/12 focus:w-[34rem] focus:h-36 h-8
		transition-all duration-500 bg-transparent outline-none resize-none no-scrollbar"
				placeholder="Search..."
				spellcheck="false"
			/>
		</div>
		<button
			class="flex items-center dark:text-neutral-50 drop-shadow-md
		 hover:text-blue-500 transition-all duration-500"
		>
			<span class="material-symbols-outlined"> search </span>
		</button>
	</div>

	<div class="flex gap-4 min-w-36 items-center">
		<nav>
			<li class="list-none flex gap-5">
				<ul><a href="/about">About</a></ul>
			</li>
		</nav>
		<button
			class="hover:shadow-glow bg-blue-200 dark:bg-blue-500 hover:shadow-blue-600/50
		 px-4 py-1 rounded-full duration-500 transition-all">Search</button
		>
	</div>
</header>
<slot />
