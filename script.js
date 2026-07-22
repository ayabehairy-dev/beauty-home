// رقم الواتساب لتلقي الطلبات
const whatsappNumber = "201159342345";

// قائمة المنتجات الـ 25 الأصلية + منتجات قسم المفروشات
const products = [
    { id: 1, title: "طقم اطباق الوطنيه 18 قطعه", price: 850, category: "kitchen", image: "images/750033994_1629676788674645_289252092860209946_n.jpg" },
    { id: 2, title: "طقم توابل اكليرك", price: 250, category: "organizer", image: "images/748829487_1627259182249739_5851370180284886437_n.jpg" },
    { id: 3, title: "طقم خشاف تركي 12 قطعه", price: 450, category: "kitchen", image: "images/748466414_1627255135583477_4838840860488980804_n.jpg" },
    { id: 4, title: "طقم كوبيات زجاج حجري 12 قطعه", price: 650, category: "kitchen", image: "images/748243275_1627254815583509_269240261537552337_n.jpg" },
    { id: 5, title: "قالب تلج سيليكون", price: 50, category: "kitchen", image: "images/748361165_1627257642249893_7627939218807055612_n.jpg" },
    { id: 6, title: "مج بابلز ايس كوفي", price: 25, category: "kitchen", image: "images/747941075_1627263292249328_4666296037564937094_n.jpg" },
    { id: 7, title: "كنكة قهوة كهربائية", price: 250, category: "appliances", image: "images/742511218_1621533949488929_78326790900806818_n.jpg" },
    { id: 8, title: "كوستر خوص", price: 100, category: "kitchen", image: "images/743658298_1622327159409608_1495453298140637178_n.jpg" },
    { id: 9, title: "منظم ملابس روباعي", price: 200, category: "kitchen", image: "images/742462121_1621545389487785_4356957097002808589_n.jpg" },
    { id: 10, title: "رشاقة سكاكين", price: 850, category: "kitchen", image: "images/742283982_1619784836330507_195988492177558783_n.jpg" },
    { id: 11, title: "مضرب نسكافيه 2*1", price: 130, category: "appliances", image: "images/742077441_1619783296330661_6210563727486428356_n.jpg" },
    { id: 12, title: "باسكت تاتش", price: 200, category: "organizers", image: "images/742060784_1619783846330606_5550532319435851609_n.jpg" },
    { id: 13, title: "طبق تسالي بلاستيك ورق شجرة", price: 45, category: "kitchen", image: "images/741838824_1619785779663746_3592548000842229173_n.jpg" },
    { id: 14, title: "راديو جولون", price: 280, category: "appliances", image: "images/741627872_1619785422997115_2790571706366644031_n.jpg" },
    { id: 15, title: "فوطة مطبخ", price: 55, category: "kitchen", image: "images/741627720_1619785959663728_7759693865465596113_n.jpg" },
    { id: 16, title: "قواعد غساله 4*1", price: 30, category: "kitchen", image: "images/741305017_1619781959664128_980591959097187051_n.jpg" },
    { id: 17, title: "مضخة قارورة", price: 75, category: "kitchen", image: "images/741495507_1619785326330458_1096748369956024500_n.jpg" },
    { id: 18, title: "طقم صواني كريزه دهبي", price: 800, category: "kitchen", image: "images/679962643_1557029135939411_3208944944428087071_n.jpg" },
    { id: 19, title: "حافظ طعام جلد", price: 850, category: "kitchen", image: "images/725599141_1603476274628030_4963897869284021787_n.jpg" },
    { id: 20, title: "طقم عجانات استانلس 3*1", price: 250, category: "kitchen", image: "images/725605639_1603480051294319_8388360816369638066_n.jpg" },
    { id: 21, title: "طقم معالق ديزني", price: 100, category: "kitchen", image: "images/725616149_1603479924627665_4012458232759401651_n.jpg" },
    { id: 22, title: "سبت غسيل الوطنيه", price: 350, category: "organizers", image: "images/725621269_1603480131294311_289909639249938188_n.jpg" },
    { id: 23, title: "طقم فطار بورسلين", price: 4500, category: "crystals", image: "images/725627291_1603475741294750_8488027107864602056_n.jpg" },
    { id: 24, title: "شيالة كحك بورسلين", price: 1100, category: "crystals", image: "images/726892030_1603480404627617_7700733450273877798_n.jpg" },
    { id: 25, title: "موب الوطنية", price: 750, category: "organizers", image: "images/726954088_1605189831123341_5663696380451413737_n.jpg" },
    // قسم المفروشات
    { id: 26, title: "بياضات ركنه كنبه +3مناديل", price: 220, category: "cavarage", image: "images/photo_2026-07-21_18-26-36.jpg" },
    { id: 27, title: "بياضات ركنه كتان كنبه +3مناديل ", price: 250, category: "cavarage", image: "images/photo_2026-07-22_22-55-17.jpg" },
    { id: 28, title: "كفر كنبه قاعده وظهر مطرزه", price: 680, category: "cavarage", image: "images/photo_2026-07-22_23-26-42.jpg" },
    { id: 29, title:  "بياضات انتريه 2 كنبه +4 كراسي +6 مناديل ",price: 750, category: "cavarage", image: "images/photo_2026-07-22_23-28-25.jpg" }
    
    
     
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupSearchAndFilters();
    setupCartEvents();
    setupImageModal();
});

// 1. عرض المنتجات
function renderProducts(items) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    grid.innerHTML = '';

    if (items.length === 0) {
        grid.innerHTML = '<p class="empty-msg" style="grid-column: 1/-1;">عذراً، لا توجد منتجات مطابقة 🔍</p>';
        return;
    }

    items.forEach(product => {
        grid.innerHTML += `
            <div class="product-card">
                <div class="img-container">
                    <img src="${product.image}" alt="${product.title}" onclick="openImageModal('${product.image}', '${product.title}')">
                </div>
                <div class="card-details">
                    <h4 class="product-title">${product.title}</h4>
                    <div class="rating">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="price-row">
                        <span class="price">${product.price.toLocaleString()} ج.م</span>
                    </div>
                    <button class="add-btn" onclick="addToCart(${product.id})">
                        <i class="fa-solid fa-cart-plus"></i> إضافة للسلة
                    </button>
                </div>
            </div>
        `;
    });
}

// 2. تكبير الصورة عند الضغط عليها
function openImageModal(imgSrc, title) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('img-full');
    const captionText = document.getElementById('modal-caption');

    if (modal && modalImg) {
        modal.style.display = "block";
        modalImg.src = imgSrc;
        if (captionText) captionText.textContent = title;
    }
}

function setupImageModal() {
    const modal = document.getElementById('image-modal');
    const closeBtn = document.querySelector('.close-modal');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
}

// 3. البحث والفلترة
function setupSearchAndFilters() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const catButtons = document.querySelectorAll('.cat-btn');

    let currentCategory = 'all';

    function filterData() {
        const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
        const filtered = products.filter(p => {
            const matchesCat = (currentCategory === 'all') || (p.category === currentCategory);
            const matchesQuery = p.title.toLowerCase().includes(query);
            return matchesCat && matchesQuery;
        });
        renderProducts(filtered);
    }

    if (searchInput) searchInput.addEventListener('input', filterData);
    if (searchBtn) searchBtn.addEventListener('click', filterData);

    catButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            catButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            filterData();
        });
    });
}

// 4. التحكم بالسلة
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartUI();
        openCart();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartTotalHeader = document.getElementById('cart-total-header');

    if (cartCount) cartCount.textContent = cart.length;

    let total = cart.reduce((sum, item) => sum + item.price, 0);

    if (cartTotalHeader) cartTotalHeader.textContent = `${total.toLocaleString()} ج.م`;
    if (cartTotalPrice) cartTotalPrice.textContent = `${total.toLocaleString()} ج.م`;

    if (!cartItems) return;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg">السلة فارغة حالياً 👋</p>';
        return;
    }

    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" onclick="openImageModal('${item.image}', '${item.title}')">
                <div class="item-info">
                    <h5>${item.title}</h5>
                    <p>${item.price.toLocaleString()} ج.م</p>
                </div>
                <i class="fa-solid fa-trash-can delete-item" onclick="removeFromCart(${index})"></i>
            </div>
        `;
    });
}

function openCart() {
    document.getElementById('cart-sidebar')?.classList.add('open');
    document.getElementById('cart-overlay')?.classList.add('open');
}

function closeCart() {
    document.getElementById('cart-sidebar')?.classList.remove('open');
    document.getElementById('cart-overlay')?.classList.remove('open');
}

// 5. أحداث السلة وإرسال الطلب للواتساب
function setupCartEvents() {
    document.getElementById('open-cart-btn')?.addEventListener('click', openCart);
    document.getElementById('close-cart-btn')?.addEventListener('click', closeCart);
    document.getElementById('cart-overlay')?.addEventListener('click', closeCart);

    document.getElementById('checkout-btn')?.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('السلة فارغة! قومي بإضافة منتجات أولاً.');
            return;
        }

        let message = "مرحباً Beauty Home 👋\nأرغب في طلب المنتجات التالية:\n\n";
        let total = 0;

        cart.forEach((item, index) => {
            const imageUrl = window.location.origin + '/' + item.image;

            message += `${index + 1}. *${item.title}*\n`;
            message += `   💰 السعر: ${item.price.toLocaleString()} ج.م\n`;
            message += `   🖼️ صورة المنتج: ${imageUrl}\n\n`;

            total += item.price;
        });

        message += `------------------------------\n`;
        message += `💵 *إجمالي الحساب:* ${total.toLocaleString()} ج.م\n`;
        message += `\nيرجى تأكيد الطلب وتحديد تفاصيل الشحن والعنوان.`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });
}