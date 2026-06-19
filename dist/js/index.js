    // ENTRADAS Total: R$ 18.800,00
    // SAÍDAS Total: R$ 3.707,10
    const transactions = [
      {
        id: 1,
        date: '2025-06-18',
        description: 'Supermercado Pão de Açúcar',
        category: 'Alimentação',
        type: 'expense',
        amount: 289.50,
        icon: 'shopping-cart',
        theme: {
          iconClass: 'text-[#38bdf8]',
          iconBg: 'bg-[#38bdf8]/10 border border-[#38bdf8]/20',
          badgeClass: 'text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/20'
        }
      },
      {
        id: 2,
        date: '2025-06-18',
        description: 'Salário — Empresa Tech Ltda',
        category: 'Receita',
        type: 'income',
        amount: 8500.00,
        icon: 'trending-up',
        theme: {
          iconClass: 'text-[#a3e635]',
          iconBg: 'bg-[#a3e635]/10 border border-[#a3e635]/20',
          badgeClass: 'text-[#a3e635] bg-[#a3e635]/10 border border-[#a3e635]/20'
        }
      },
      {
        id: 3,
        date: '2025-06-17',
        description: 'iFood — Jantar',
        category: 'Alimentação',
        type: 'expense',
        amount: 68.90,
        icon: 'utensils',
        theme: {
          iconClass: 'text-[#38bdf8]',
          iconBg: 'bg-[#38bdf8]/10 border border-[#38bdf8]/20',
          badgeClass: 'text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/20'
        }
      },
      {
        id: 4,
        date: '2025-06-17',
        description: 'Uber — Centro → Pinheiros',
        category: 'Transporte',
        type: 'expense',
        amount: 34.70,
        icon: 'car',
        theme: {
          iconClass: 'text-[#fb923c]',
          iconBg: 'bg-[#fb923c]/10 border border-[#fb923c]/20',
          badgeClass: 'text-[#fb923c] bg-[#fb923c]/10 border border-[#fb923c]/20'
        }
      },
      {
        id: 5,
        date: '2025-06-15',
        description: 'Netflix Premium',
        category: 'Streaming',
        type: 'expense',
        amount: 55.90,
        icon: 'tv',
        theme: {
          iconClass: 'text-[#c084fc]',
          iconBg: 'bg-[#c084fc]/10 border border-[#c084fc]/20',
          badgeClass: 'text-[#c084fc] bg-[#c084fc]/10 border border-[#c084fc]/20'
        }
      },
      {
        id: 6,
        date: '2025-06-12',
        description: 'Projeto Freelance',
        category: 'Receita',
        type: 'income',
        amount: 7500.00,
        icon: 'trending-up',
        theme: {
          iconClass: 'text-[#a3e635]',
          iconBg: 'bg-[#a3e635]/10 border border-[#a3e635]/20',
          badgeClass: 'text-[#a3e635] bg-[#a3e635]/10 border border-[#a3e635]/20'
        }
      },
      {
        id: 7,
        date: '2025-06-12',
        description: 'Posto Ipiranga',
        category: 'Transporte',
        type: 'expense',
        amount: 150.00,
        icon: 'car',
        theme: {
          iconClass: 'text-[#fb923c]',
          iconBg: 'bg-[#fb923c]/10 border border-[#fb923c]/20',
          badgeClass: 'text-[#fb923c] bg-[#fb923c]/10 border border-[#fb923c]/20'
        }
      },
      {
        id: 8,
        date: '2025-06-12',
        description: 'Conta de Luz',
        category: 'Moradia',
        type: 'expense',
        amount: 230.00,
        icon: 'home',
        theme: {
          iconClass: 'text-[#4ade80]',
          iconBg: 'bg-[#4ade80]/10 border border-[#4ade80]/20',
          badgeClass: 'text-[#4ade80] bg-[#4ade80]/10 border border-[#4ade80]/20'
        }
      },
      {
        id: 9,
        date: '2025-06-12',
        description: 'Jantar Restaurante',
        category: 'Alimentação',
        type: 'expense',
        amount: 180.00,
        icon: 'utensils',
        theme: {
          iconClass: 'text-[#38bdf8]',
          iconBg: 'bg-[#38bdf8]/10 border border-[#38bdf8]/20',
          badgeClass: 'text-[#38bdf8] bg-[#38bdf8]/10 border border-[#38bdf8]/20'
        }
      },
      {
        id: 10,
        date: '2025-06-10',
        description: 'Aluguel — Apartamento',
        category: 'Moradia',
        type: 'expense',
        amount: 2100.00,
        icon: 'home',
        theme: {
          iconClass: 'text-[#4ade80]',
          iconBg: 'bg-[#4ade80]/10 border border-[#4ade80]/20',
          badgeClass: 'text-[#4ade80] bg-[#4ade80]/10 border border-[#4ade80]/20'
        }
      },
      {
        id: 11,
        date: '2025-06-08',
        description: 'Venda de Notebook',
        category: 'Receita',
        type: 'income',
        amount: 2500.00,
        icon: 'trending-up',
        theme: {
          iconClass: 'text-[#a3e635]',
          iconBg: 'bg-[#a3e635]/10 border border-[#a3e635]/20',
          badgeClass: 'text-[#a3e635] bg-[#a3e635]/10 border border-[#a3e635]/20'
        }
      },
      {
        id: 12,
        date: '2025-06-08',
        description: 'Compras na Amazon',
        category: 'Lazer',
        type: 'expense',
        amount: 355.80,
        icon: 'shopping-bag',
        theme: {
          iconClass: 'text-[#facc15]',
          iconBg: 'bg-[#facc15]/10 border border-[#facc15]/20',
          badgeClass: 'text-[#facc15] bg-[#facc15]/10 border border-[#facc15]/20'
        }
      },
      {
        id: 13,
        date: '2025-06-08',
        description: 'Academia Bluefit',
        category: 'Saúde',
        type: 'expense',
        amount: 120.00,
        icon: 'heart',
        theme: {
          iconClass: 'text-[#f87171]',
          iconBg: 'bg-[#f87171]/10 border border-[#f87171]/20',
          badgeClass: 'text-[#f87171] bg-[#f87171]/10 border border-[#f87171]/20'
        }
      },
      {
        id: 14,
        date: '2025-06-05',
        description: 'Rendimentos',
        category: 'Receita',
        type: 'income',
        amount: 300.00,
        icon: 'trending-up',
        theme: {
          iconClass: 'text-[#a3e635]',
          iconBg: 'bg-[#a3e635]/10 border border-[#a3e635]/20',
          badgeClass: 'text-[#a3e635] bg-[#a3e635]/10 border border-[#a3e635]/20'
        }
      },
      {
        id: 15,
        date: '2025-06-05',
        description: 'Farmácia Raia',
        category: 'Saúde',
        type: 'expense',
        amount: 122.30,
        icon: 'heart',
        theme: {
          iconClass: 'text-[#f87171]',
          iconBg: 'bg-[#f87171]/10 border border-[#f87171]/20',
          badgeClass: 'text-[#f87171] bg-[#f87171]/10 border border-[#f87171]/20'
        }
      }
    ];

    // State Variables
    let searchQuery = '';
    let typeFilter = 'all'; // 'all', 'income', 'expense'
    let categoryFilter = 'all'; // 'all' or specific category name
    let activeSort = 'recent'; // 'recent', 'oldest', 'highest', 'lowest'

    // Formatter helpers
    const currencyFormatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });

    const dateFormatter = (dateString) => {
      const options = { day: '2-digit', month: 'short', year: 'numeric' };
      const date = new Date(dateString + 'T00:00:00');
      // Format to "18 JUN 2025" style
      return date.toLocaleDateString('pt-BR', options).toUpperCase().replace('.', '');
    };

    // Calculate & update header totals
    function updateSummary(filteredData) {
      let totalIn = 0;
      let totalOut = 0;

      filteredData.forEach(tx => {
        if (tx.type === 'income') {
          totalIn += tx.amount;
        } else {
          totalOut += tx.amount;
        }
      });

      document.getElementById('total-in').innerText = currencyFormatter.format(totalIn);
      document.getElementById('total-out').innerText = currencyFormatter.format(totalOut);
      
      const countEl = document.getElementById('transaction-count');
      const suffix = filteredData.length === 1 ? 'transação encontrada' : 'transações encontradas';
      countEl.innerText = `${filteredData.length} ${suffix}`;
    }

    // Toggle Dropdowns Helper
    function setupDropdown(btnId, menuId) {
      const btn = document.getElementById(btnId);
      const menu = document.getElementById(menuId);
      
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('hidden');
        // Close other dropdown
        const otherMenuId = btnId === 'filter-btn' ? 'sort-menu' : 'filter-menu';
        document.getElementById(otherMenuId).classList.add('hidden');
      });

      document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && e.target !== btn) {
          menu.classList.add('hidden');
        }
      });
    }

    setupDropdown('filter-btn', 'filter-menu');
    setupDropdown('sort-btn', 'sort-menu');

    // Filter Logic
    function setTypeFilter(type) {
      typeFilter = type;
      
      // Update buttons style
      ['all', 'income', 'expense'].forEach(t => {
        const btn = document.getElementById(`type-${t}`);
        if (t === type) {
          btn.className = 'flex-1 py-1 px-2 text-xs rounded bg-zinc-800 text-white font-medium transition cursor-pointer';
        } else {
          btn.className = 'flex-1 py-1 px-2 text-xs rounded bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition cursor-pointer';
        }
      });

      render();
    }

    function toggleCategoryFilter(category) {
      categoryFilter = category;

      // Update UI classes
      const allBtn = document.getElementById('cat-all');
      const categories = ['Alimentação', 'Receita', 'Transporte', 'Streaming', 'Moradia', 'Saúde', 'Lazer'];
      
      if (category === 'all') {
        allBtn.className = 'text-left py-1.5 px-2 text-xs rounded bg-zinc-800 text-white transition cursor-pointer';
        categories.forEach(cat => {
          const btn = document.getElementById(`cat-${cat}`);
          if (btn) btn.className = 'text-left py-1.5 px-2 text-xs rounded bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition cursor-pointer';
        });
      } else {
        allBtn.className = 'text-left py-1.5 px-2 text-xs rounded bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition cursor-pointer';
        categories.forEach(cat => {
          const btn = document.getElementById(`cat-${cat}`);
          if (btn) {
            if (cat === category) {
              btn.className = 'text-left py-1.5 px-2 text-xs rounded bg-zinc-800 text-white transition cursor-pointer';
            } else {
              btn.className = 'text-left py-1.5 px-2 text-xs rounded bg-transparent text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition cursor-pointer';
            }
          }
        });
      }

      render();
    }

    // Sort Logic
    function setSort(sortType) {
      activeSort = sortType;
      
      // Update Sort button label
      const labels = {
        recent: 'Mais recente',
        oldest: 'Mais antigo',
        highest: 'Maior valor',
        lowest: 'Menor valor'
      };
      document.getElementById('sort-label').innerText = labels[sortType];
      document.getElementById('sort-menu').classList.add('hidden');
      render();
    }

    // Search bar event
    document.getElementById('search-input').addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      render();
    });

    // Render logic
    function render() {
      // 1. Filter data
      let filtered = transactions.filter(tx => {
        const matchesSearch = tx.description.toLowerCase().includes(searchQuery) ||
                             tx.category.toLowerCase().includes(searchQuery);
        
        const matchesType = typeFilter === 'all' || tx.type === typeFilter;
        const matchesCategory = categoryFilter === 'all' || tx.category === categoryFilter;

        return matchesSearch && matchesType && matchesCategory;
      });

      // Update Cards and Subtitle counts
      updateSummary(filtered);

      // 2. Sort data
      filtered.sort((a, b) => {
        if (activeSort === 'recent') {
          return new Date(b.date) - new Date(a.date) || b.id - a.id;
        } else if (activeSort === 'oldest') {
          return new Date(a.date) - new Date(b.date) || a.id - b.id;
        } else if (activeSort === 'highest') {
          return b.amount - a.amount;
        } else if (activeSort === 'lowest') {
          return a.amount - b.amount;
        }
        return 0;
      });

      // Group by date
      const groups = {};
      filtered.forEach(tx => {
        if (!groups[tx.date]) {
          groups[tx.date] = {
            transactions: [],
            totalExpenses: 0,
            hasIncome: false
          };
        }
        groups[tx.date].transactions.push(tx);
      });

      // Calculate totals for each group
      Object.keys(groups).forEach(date => {
        let net = 0;
        let onlyExpenses = true;
        groups[date].transactions.forEach(t => {
          if (t.type === 'income') {
            net += t.amount;
            onlyExpenses = false;
          } else {
            net -= t.amount;
          }
        });
        
        groups[date].displayTotal = onlyExpenses ? Math.abs(net) : net;
      });

      // 3. Build HTML
      const container = document.getElementById('transactions-container');
      const emptyState = document.getElementById('empty-state');
      container.innerHTML = '';

      const dates = Object.keys(groups).sort((a, b) => {
        return activeSort === 'oldest' ? new Date(a) - new Date(b) : new Date(b) - new Date(a);
      });

      if (dates.length === 0) {
        container.classList.add('hidden');
        emptyState.classList.remove('hidden');
        emptyState.classList.add('flex');
        return;
      }

      container.classList.remove('hidden');
      emptyState.classList.add('hidden');
      emptyState.classList.remove('flex');

      dates.forEach(date => {
        const group = groups[date];
        const formattedDate = dateFormatter(date);
        const formattedTotal = currencyFormatter.format(group.displayTotal);

        let groupHTML = `
          <div class="space-y-4">
            <!-- Group Header -->
            <div class="flex items-center justify-between text-[11px] font-semibold text-zinc-500 tracking-wider">
              <span class="font-mono">${formattedDate}</span>
              <div class="flex-1 h-[1px] bg-[#1f1f23] mx-4"></div>
              <span class="font-mono text-zinc-400">${formattedTotal}</span>
            </div>
            
            <!-- Group Items -->
            <div class="space-y-3">
        `;

        group.transactions.forEach(tx => {
          const formattedAmount = (tx.type === 'income' ? '+' : '-') + currencyFormatter.format(tx.amount);
          const amountColorClass = tx.type === 'income' ? 'text-[#a3e635]' : 'text-zinc-100';

          groupHTML += `
            <div class="bg-[#121214] border border-[#1f1f23] rounded-xl p-4 flex items-center justify-between hover:border-zinc-700 transition duration-200 group">
              <div class="flex items-center gap-4">
                <!-- Icon Box -->
                <div class="w-10 h-10 rounded-lg flex items-center justify-center transition duration-200 ${tx.theme.iconBg}">
                  <i data-lucide="${tx.icon}" class="h-4 w-4 ${tx.theme.iconClass}"></i>
                </div>
                
                <!-- Description & Badge -->
                <div class="flex flex-col gap-1.5">
                  <span class="text-sm font-semibold text-white group-hover:text-green-400/90 transition-colors">${tx.description}</span>
                  <span class="inline-block self-start text-[10px] font-bold px-2 py-0.5 rounded ${tx.theme.badgeClass}">
                    ${tx.category}
                  </span>
                </div>
              </div>
              
              <!-- Value -->
              <div class="text-sm font-semibold font-mono ${amountColorClass}">
                ${formattedAmount}
              </div>
            </div>
          `;
        });

        groupHTML += `
            </div>
          </div>
        `;

        container.insertAdjacentHTML('beforeend', groupHTML);
      });

      // Re-initialize Lucide Icons for dynamic content
      lucide.createIcons();
    }

    // Initial load
    render();