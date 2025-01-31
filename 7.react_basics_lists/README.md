<p>A lot of time you'll have data in a list, i.e. an array, and you'll need to render the contents of said list with a similar markup:</p>
<ul>
<li>Product cards in an eCommerce platform</li>
<li>Pictures on your Instagram feed</li>
<li>Pok&eacute;mon on your Pok&eacute;mon apps!</li>
</ul>
<p>You can rely on language constructs like the <code class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px" dir="ltr">for</code> loop or the <code class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px" dir="ltr">map</code> method in arrays.&nbsp;</p>
<p>You can see that when rendering a list, we pass a special attribute (property) called <code class="inline text-code text-secondary dark:text-secondary-dark px-1 rounded-md no-underline bg-gray-30 bg-opacity-10 py-px" dir="ltr">key</code>, we do this so React can keep track of elements in that list individually and therefore only update those elements that change instead of the entire list! If you don't pass this special property, React will warn you in the console.&nbsp;<br><br>Using the index value of the array item is not advisible because as the array changes, the index can change for some elements! Ideally, this id should be a unique identifier that comes from your data source!</p>
<p>&nbsp;</p>