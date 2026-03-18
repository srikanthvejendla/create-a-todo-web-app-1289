# Todo Web App UI/UX Design Specifications

## Wireframes

### Desktop Views
- **Task List:** ![Task List Wireframe](../assets/wireframe_task_list.png)
- **Task Detail:** ![Task Detail Wireframe](../assets/wireframe_task_detail.png)
- **Category Management:** ![Category Management Wireframe](../assets/wireframe_category_management.png)

### Mobile Views
- **Task List (Mobile):** ![Task List Mobile Wireframe](../assets/wireframe_task_list_mobile.png)
- **Task Detail (Mobile):** ![Task Detail Mobile Wireframe](../assets/wireframe_task_detail_mobile.png)
- **Category Management (Mobile):** ![Category Management Mobile Wireframe](../assets/wireframe_category_management_mobile.png)

---

## Design System Specifications

### 1. Design Tokens

#### Colors (HSL)
- `--color-bg`: hsl(0, 0%, 100%) (Light), hsl(220, 13%, 10%) (Dark)
- `--color-surface`: hsl(0, 0%, 98%) (Light), hsl(220, 13%, 14%) (Dark)
- `--color-primary`: hsl(221, 83%, 53%) (Blue accent)
- `--color-secondary`: hsl(220, 14%, 96%) (Light), hsl(220, 14%, 22%) (Dark)
- `--color-border`: hsl(220, 13%, 90%) (Light), hsl(220, 13%, 25%) (Dark)
- `--color-text`: hsl(220, 15%, 20%) (Light), hsl(0, 0%, 98%) (Dark)
- `--color-muted`: hsl(220, 10%, 60%)
- `--color-danger`: hsl(0, 80%, 60%)

#### Font Stack
- `font-family`: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, sans-serif
- `font-size-base`: 1rem (16px)
- `font-size-sm`: 0.875rem
- `font-size-lg`: 1.25rem
- `font-weight-regular`: 400
- `font-weight-bold`: 600

#### Spacing Scale (4px grid)
- 4, 8, 12, 16, 24, 32, 48, 64 px

#### Border Radius
- `--radius-sm`: 4px
- `--radius-md`: 8px
- `--radius-lg`: 16px

#### Shadows
- `--shadow-sm`: 0 1px 2px 0 hsl(220, 13%, 90%)
- `--shadow-md`: 0 2px 8px 0 hsl(220, 13%, 85%)

---

### 2. Responsive Breakpoints
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Wide: 1440px+

---

### 3. Component Specifications

#### Task List Screen
- **Sidebar:**
  - Shows categories/tags, collapsible on mobile
  - Min width: 200px (desktop), 56px (collapsed/mobile)
  - Active category highlighted with primary color
- **Top Bar:**
  - Search input (min 44x44px), user avatar/menu
- **Task List:**
  - List or card layout, each task: title, due date, status, quick actions (edit, complete, delete)
  - Drag-and-drop handle (desktop)
  - Completed tasks visually distinct (muted text, strikethrough)
- **FAB (Floating Action Button):**
  - 56x56px, bottom right, primary color, accessible label

#### Task Detail Screen
- **Header:**
  - Breadcrumbs or back button
  - Task title (editable), status toggle
- **Details:**
  - Description (multiline), due date (date picker), category/tags (multi-select)
  - Action buttons: edit, delete, mark complete

#### Category Management Screen
- **List:**
  - Categories/tags, reorderable (drag-and-drop)
  - Edit/delete icons per row
- **Modal/Dialog:**
  - Add/edit category, input with validation

---

### 4. States & Variants
- **Default, Hover, Focus, Active, Disabled** for all interactive elements
- **Loading** indicators for async actions (spinners, skeletons)
- **Error** states: inline error messages, error boundaries

---

### 5. Animation Specs
- **Button/Item Hover:** 100ms fade or scale, cubic-bezier(0.4,0,0.2,1)
- **FAB:** 200ms scale-in/out
- **Drag-and-drop:** 300ms spring
- **Modal/Dialog:** 250ms fade/slide

---

### 6. Accessibility Notes
- All interactive elements ≥44x44px
- Text contrast: WCAG AA (4.5:1 min)
- Focus indicators: 2px outline, primary color
- ARIA labels for FAB, icons, modals
- Keyboard navigation: tab order, skip links
- Screen reader support: headings, landmarks, live regions for updates

---

### 7. UX Patterns
- **Progressive Disclosure:** Only show advanced filters/actions when needed
- **Undo for Deletes:** Snackbar with undo for destructive actions
- **Real-time Feedback:** Optimistic UI for task actions, real-time sync indicator
- **Dark Mode:** Simultaneous design, toggle in user menu

---

## Component Hierarchy (Sample)
- `AppLayout`
  - `Sidebar`
    - `CategoryList`
  - `TopBar`
    - `SearchBar`
    - `UserMenu`
  - `MainContent`
    - `TaskList`
      - `TaskItem`
    - `FAB`
    - `TaskDetail`
    - `CategoryManager`

---

## Data Flow Notes
- Task/category CRUD via REST/WS API
- State managed via React Context + SWR/React Query
- Real-time updates via Supabase subscriptions

---

## Testing & Accessibility
- Use axe-core for a11y tests
- Unit tests for all interaction states

---

*See `/assets/` for wireframe images.*
