# Fejér’s Theorem

## An End-to-End Metacognitive Mathematics Solution

**Problem:** HA-02 in the [local problem bank](problems.md).  
**Approach:** a Hybrid Five-Faculty Knowledge Graph whose agents own mathematical proof obligations.  
**Evidence status:** the complete mathematical argument is given below. Agent messages and repair episodes are explicitly illustrative; no deployed multi-agent run or proof-assistant certificate is claimed.

Every agent contains **Ego, Memory, Intellect, Sense, and Action**. Ego fixes its goal and coordinates publication; Memory holds definitions and proved imports; Intellect selects a strategy; Sense audits hypotheses and boundary conditions; Action executes deductions and checks the output. The faculty table describes these capacities inside each node, rather than five separate faculty agents.

Logical dependencies form a DAG. Iteration and diagnostic feedback belong to the orchestration layer. A diagnostic can request a revised proof but cannot establish a premise by assuming its downstream conclusion. Changed exports invalidate dependent certificates until they are rechecked. Numerical examples illustrate the argument; the universal conclusions follow from the proof.

## 1. Target Theorem and Convention

> If f is continuous and 2π-periodic, the Cesàro means of its Fourier partial sums converge uniformly to f:
>
> $$\sigma_N f=\frac{S_0f+\cdots+S_Nf}{N+1},\qquad\|\sigma_Nf-f\|_\infty\to0.$$

Use normalized measure $dt/(2\pi)$ on [−π,π], coefficients $c_k=\int f(t)e^{-ikt}\,dt/(2\pi)$, and $S_nf(x)=\sum_{|k|\le n}c_ke^{ikx}$. The output concerns averaged partial sums, not a promise about the raw S_n.

**Imports:** elementary exponential orthogonality, finite geometric sums, boundedness and uniform continuity of continuous functions on a compact circle. All kernel identities and convergence estimates are proved below.

## 2. Four-Agent Graph

```text
N1 Cesàro/convolution identity → N2 Positivity and unit mass ─┐
N1 → N3 Tail concentration ────────────────────────────────┴→ N4 Uniform convergence
```

| Node | Memory | Sense | Intellect | Action | Ego |
|---|---|---|---|---|---|
| N1 Kernel | Fourier conventions | Track N+1 and normalized measure | Rewrite average as convolution | Derive kernel identities | Fix averaged target |
| N2 Positive mass | Orthogonality | Include value at zero | Use squared finite sum | Prove nonnegativity and mass one | Preserve constants |
| N3 Tail | Sine denominator bounds | Stay away from zero modulo 2π | Bound exterior mass | Prove concentration | Control distant values |
| N4 Convergence | Uniform continuity and boundedness | Use one delta for all x | Split near and far errors | Prove supremum bound | Export uniform theorem |

## 3. Full Node-by-Node Proof

### N1 — Build the Fejér Kernel

The Dirichlet kernel is $D_n(t)=\sum_{|k|\le n}e^{ikt}$. Finite rearrangement gives

$$S_nf(x)=\int_{-\pi}^{\pi}f(x-t)D_n(t)\,\frac{dt}{2\pi}.$$

Averaging yields the same expression with

$$K_N(t)=\frac1{N+1}\sum_{n=0}^ND_n(t)=\sum_{|k|\le N}\left(1-\frac{|k|}{N+1}\right)e^{ikt}.$$

To obtain positivity, expand the square:

$$\left|\sum_{j=0}^Ne^{ijt}\right|^2=\sum_{j,l=0}^Ne^{i(j-l)t}=\sum_{|k|\le N}(N+1-|k|)e^{ikt}.$$

Thus

$$K_N(t)=\frac1{N+1}\left|\sum_{j=0}^Ne^{ijt}\right|^2=\frac1{N+1}\frac{\sin^2((N+1)t/2)}{\sin^2(t/2)}$$

for t not a multiple of 2π. The continuous value at zero is N+1. This proves $\sigma_Nf=f*K_N$ without any interchange of infinite sums.

### N2 — Positivity and Exact Mass

The squared-sum expression proves $K_N\ge0$. Integrate its finite Fourier expansion. Every nonzero exponential has normalized integral zero, while the constant coefficient is 1. Hence

$$\int_{-\pi}^{\pi}K_N(t)\,\frac{dt}{2\pi}=1.$$

Consequently convolution preserves constants and $\|\sigma_N f\|_\infty\le\|f\|_\infty$.

### N3 — Mass Concentrates Near Zero

Fix $0<\delta<\pi$. For $\delta\le|t|\le\pi$, $\sin^2(t/2)\ge\sin^2(\delta/2)$, and the numerator is at most 1. Therefore

$$K_N(t)\le\frac1{(N+1)\sin^2(\delta/2)},$$

and, since the normalized measure of the integration set is at most 1,

$$\int_{\delta\le|t|\le\pi}K_N(t)\,\frac{dt}{2\pi}\le\frac1{(N+1)\sin^2(\delta/2)}\to0.$$

The height at zero grows, but the mass stays one and moves into smaller neighborhoods. Height alone is not the approximation argument.

### N4 — Uniform Error Control

Write M=||f||∞. For any epsilon>0, uniform continuity on the circle gives delta such that $|f(x-t)-f(x)|<\varepsilon/2$ whenever |t|<delta, uniformly in x. By positivity and unit mass,

$$\begin{aligned}
|\sigma_Nf(x)-f(x)|
&\le\int|f(x-t)-f(x)|K_N(t)\,\frac{dt}{2\pi}\\
&\le\frac\varepsilon2+\frac{2M}{(N+1)\sin^2(\delta/2)}.
\end{aligned}$$

Choose N so the second term is smaller than epsilon/2. This choice is independent of x, proving uniform convergence. $\square$

A reusable quantitative version is

$$\|\sigma_Nf-f\|_\infty\le\omega_f(\delta)+\frac{2\|f\|_\infty}{(N+1)\sin^2(\delta/2)},$$

where $\omega_f(\delta)=\sup_{x,\,|t|\le\delta}|f(x-t)-f(x)|$ on the circle. Its two terms encode different obligations: local continuity and distant kernel mass.

## 4. Worked Example: The Periodic Absolute-Value Function

Let f(x)=|x| on [−π,π], extended periodically. The endpoint values match, so this defines a continuous function on the circle. It has M=pi and a circle modulus bounded by delta. The error bound becomes

$$\|\sigma_Nf-f\|_\infty\le\delta+\frac{2\pi}{(N+1)\sin^2(\delta/2)}.$$

The coefficients follow by integration:

$$c_0=\frac\pi2,\qquad c_k=\frac{(-1)^k-1}{\pi k^2}\quad(k\ne0).$$

Hence

$$\sigma_Nf(x)=\frac\pi2+2\sum_{k=1}^N\left(1-\frac{k}{N+1}\right)\frac{(-1)^k-1}{\pi k^2}\cos(kx).$$

For N=1 this is $\pi/2-(2/\pi)\cos x$. The sequence smooths the corner while converging uniformly to it. To guarantee error below 0.1, for example, choose delta=0.05 and any integer N satisfying $2\pi/((N+1)\sin^2(0.025))<0.05$. This conservative bound proves a tolerance rather than merely displaying a good plot.

## 5. Illustrative Message Trace

| Sender → receiver | Certificate |
|---|---|
| N1 → N2,N3 | Exact finite kernel and convolution identities |
| N2 → N4 | Positive kernel with normalized mass one |
| N3 → N4 | Explicit exterior-mass estimate for each delta |
| N4 → caller | One N that controls every x, with the error bound |

The two analytic branches converge at N4. Neither positivity without concentration nor concentration without a mass normalization supplies the whole proof.

## 6. Failure and Five-Faculty Repair

A failed branch replaces sigma_N by S_N while retaining the positive-kernel proof. Sense observes that the Dirichlet kernel changes sign, so the positivity estimate is unavailable.

```json
{"node":"N4","state":"STALLED","failing_faculty":"Sense","failed_hypothesis":"nonnegative averaging kernel","observed":"raw partial sum uses Dirichlet kernel","repair_target":"N1","blocked_export":"uniform convergence under the Fejer proof"}
```

Memory retrieves the Cesàro definition. Sense distinguishes the two kernels. Intellect restores averaging. Action recomputes the squared-sum identity, positivity, and mass. Ego exports the theorem for sigma_N and records that convergence of raw S_N requires a separate argument with additional considerations.

## 7. Boundary Audit and Exports

Discontinuous periodic inputs cannot be uniform limits of these continuous trigonometric polynomials. A discontinuity therefore requires a different convergence statement. For a constant function the approximation is exact for every N. For any finite frequency k, the coefficient multiplier tends to one but is not identically one at finite N.

Export the convolution identity, positive unit-mass kernel, tail bound, and uniform approximation theorem. Combined with density of continuous functions in L², these support the completeness argument in Parseval's theorem.

## Evidence, Provenance, and Next Use

**Additional execution check:** compared the finite Fourier kernel formula with its positive squared-sum formula at 55 combinations of order and angle, including the removable value at zero. All agreed to numerical precision.

The proof is complete relative to the explicitly stated elementary definitions and supporting imports. The node outputs provide mathematical evidence for the stated theorem. Kernel verification would require a separate formalization of the exact statements and dependencies; the faculty labels themselves do not certify correctness.

**Mathematical reference:** [MIT Fejér theorem lecture notes](https://ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/eb44436072623f60f8f416875d4b2c11_MIT18_102s21_lec16.pdf).

**Framework references:** [Meta-Math essay](../../../Agentic-Math/Essay.md), [Agentic Math book](../../../Agentic-Math/Book.md), and the [Bézout worked example](../../../1-Number-Theory/projects/euclidean-algorithm-and-bezout-identity.md). The node decomposition and demonstration messages are authored for this example.
